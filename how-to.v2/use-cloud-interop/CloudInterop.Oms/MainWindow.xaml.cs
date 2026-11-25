using System;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Media;
using System.Windows.Shapes;
using CloudInteropOms.Auth;
using CloudInteropOms.CloudInterop;
using CloudInteropOms.Oms;
using OpenFin;

namespace CloudInteropOms
{
    /// <summary>
    /// The OMS window. All the Cloud Interop work lives in <see cref="CloudInteropConnection"/>,
    /// <see cref="ContextChannel"/>, <see cref="IntentService"/> and <see cref="EntraTokenProvider"/>; this
    /// class wires them to the UI. Their events arrive on background threads, so every handler goes
    /// through <see cref="OnUi"/>.
    /// </summary>
    public partial class MainWindow : Window
    {
        internal static readonly (string Name, Color Color)[] ContextGroups =
        {
            ("green", Color.FromRgb(0x00, 0xCC, 0x88)),
            ("purple", Color.FromRgb(0x82, 0x55, 0xFF)),
            ("orange", Color.FromRgb(0xFF, 0x8C, 0x4C)),
            ("red", Color.FromRgb(0xFF, 0x5E, 0x60)),
            ("pink", Color.FromRgb(0xFF, 0x8F, 0xB8)),
            ("yellow", Color.FromRgb(0xE9, 0xFF, 0x8F))
        };

        private AppSettings _settings;
        private readonly ObservableCollection<Order> _orders;
        private readonly ICollectionView _ordersView;
        private readonly ObservableCollection<LogEntry> _log = new ObservableCollection<LogEntry>();

        private CloudInteropConnection? _connection;
        private ContextChannel? _channel;
        private IntentService? _intents;
        private EntraTokenProvider? _entra;
        private Predicate<Order>? _filter;
        private bool _suppressBroadcast;
        private bool _isBusy;

        public MainWindow(AppSettings settings)
        {
            InitializeComponent();
            _settings = settings;

            _orders = new ObservableCollection<Order>(SampleOrders.Create());
            _ordersView = CollectionViewSource.GetDefaultView(_orders);
            _ordersView.Filter = item => _filter == null || _filter((Order)item);
            OrdersGrid.ItemsSource = _ordersView;
            LogList.ItemsSource = _log;

            TicketSide.ItemsSource = Enum.GetValues(typeof(OrderSide));
            TicketSide.SelectedIndex = 0;
            PopulateContextGroups();
            ApplySettings();

            if (!AppSettings.IsConfigured(settings.CloudInterop.Url))
            {
                Log(LogKind.Info, "Click Settings to enter the Cloud Interop url HERE gave you before connecting.");
            }
        }

        // ---------------------------------------------------------------------------------------------
        // Settings: appsettings.json supplies the defaults, the Settings window can change them
        // ---------------------------------------------------------------------------------------------

        private void OnSettingsClick(object sender, RoutedEventArgs e)
        {
            ShowSettingsWindow();
        }

        private bool ShowSettingsWindow()
        {
            var window = new SettingsWindow(_settings.Clone()) { Owner = this };
            if (window.ShowDialog() != true || window.Result == null)
            {
                return false;
            }

            _settings = window.Result;

            // The client is created with the url, platform id and source id, so start again with the new ones.
            DisposeCloudInterop();
            _entra?.Dispose();
            _entra = null;
            UpdateEntraStatus();

            ApplySettings();
            Log(LogKind.Info, $"Settings saved: {_settings.CloudInterop.Url} as {_settings.CloudInterop.SourceId} on platform {_settings.CloudInterop.PlatformId}");
            return true;
        }

        private void ApplySettings()
        {
            var options = _settings.CloudInterop;
            Title = $"HERE Cloud Interop OMS - {options.SourceId}";
            HeaderText.Text = $"HERE Cloud Interop OMS  |  {options.SourceId}";
            UsernameBox.Text = _settings.Basic.Username;
            BasicRadio.IsChecked = _settings.AuthMode == AuthMode.Basic;
            EntraRadio.IsChecked = _settings.AuthMode == AuthMode.Entra;

            var configuredGroup = options.DefaultContextGroup?.Trim();
            ComboBoxItem? match = null;
            if (!string.IsNullOrEmpty(configuredGroup))
            {
                match = GroupCombo.Items.OfType<ComboBoxItem>()
                    .FirstOrDefault(item => string.Equals(item.Tag as string, configuredGroup, StringComparison.OrdinalIgnoreCase));
                if (match == null)
                {
                    match = new ComboBoxItem { Content = configuredGroup, Tag = configuredGroup };
                    GroupCombo.Items.Add(match);
                }
            }

            GroupCombo.SelectedItem = match ?? GroupCombo.Items[0];
        }

        // ---------------------------------------------------------------------------------------------
        // Creating the Cloud Interop client
        // ---------------------------------------------------------------------------------------------

        private void EnsureCloudInterop()
        {
            if (_connection != null)
            {
                return;
            }

            var options = _settings.CloudInterop;
            _connection = new CloudInteropConnection(options.Url, options.PlatformId, options.SourceId, options.ReconnectRetryLimit);
            _connection.StatusChanged += (_, e) => OnUi(() => ShowStatus(e));
            _connection.Error += (_, error) => OnUi(() => Log(LogKind.Error, error.Message));

            _channel = new ContextChannel(_connection.Api);
            _channel.ContextReceived += (_, e) => OnUi(() => OnContextReceived(e));

            _intents = new IntentService(_connection.Api, options.SourceId, $"HERE .NET OMS ({options.SourceId})");
            _intents.Error += (_, error) => OnUi(() => Log(LogKind.Error, error.Message));
            _intents.DiscoveryAnswered += (_, message) => OnUi(() => Log(LogKind.Info, message));

            _intents.AddIntentHandler(Fdc3.Intents.ViewInstrument, Fdc3.ContextTypes.Instrument,
                context => OnUiAsync(() => HandleIntent(Fdc3.Intents.ViewInstrument, context, ShowOrdersForInstrument)));
            _intents.AddIntentHandler(Fdc3.Intents.ViewContact, Fdc3.ContextTypes.Contact,
                context => OnUiAsync(() => HandleIntent(Fdc3.Intents.ViewContact, context, ShowOrdersForContact)));
            _intents.AddIntentHandler(Fdc3.Intents.ViewOrganization, Fdc3.ContextTypes.Organization,
                context => OnUiAsync(() => HandleIntent(Fdc3.Intents.ViewOrganization, context, ShowOrdersForOrganization)));
        }

        /// <summary>
        /// Another app raised one of our intents: show the matching orders and return the first one as the result.
        /// </summary>
        private Context? HandleIntent(string intent, Context context, Func<Context, bool, Context?> showOrders)
        {
            Log(LogKind.Received, $"Intent {intent}: {Fdc3.Describe(context)}");
            return showOrders(context, true);
        }

        private void DisposeCloudInterop()
        {
            _intents?.Dispose();
            _channel?.Dispose();
            _connection?.Dispose();
            _intents = null;
            _channel = null;
            _connection = null;
        }

        // ---------------------------------------------------------------------------------------------
        // Connecting: basic authentication or a JWT from Entra ID
        // ---------------------------------------------------------------------------------------------

        private async void OnConnectClick(object sender, RoutedEventArgs e)
        {
            if (_isBusy)
            {
                return;
            }

            if (!AppSettings.IsConfigured(_settings.CloudInterop.Url)
                && (!ShowSettingsWindow() || !AppSettings.IsConfigured(_settings.CloudInterop.Url)))
            {
                Log(LogKind.Error, "Enter the Cloud Interop url HERE gave you in Settings before connecting.");
                return;
            }

            EnsureCloudInterop();
            JoinSelectedGroup();
            _isBusy = true;
            UpdateButtons();
            try
            {
                if (BasicRadio.IsChecked == true)
                {
                    await _connection!.ConnectWithBasicAuthAsync(UsernameBox.Text, PasswordBox.Password);
                }
                else
                {
                    if (!AppSettings.IsConfigured(_settings.Entra.AuthenticationId))
                    {
                        throw new InvalidOperationException("Enter the Entra authentication id HERE gave you in Settings.");
                    }

                    var entra = await SignInToEntraAsync();
                    await _connection!.ConnectWithJwtAsync(entra.GetToken, _settings.Entra.AuthenticationId);
                }
            }
            catch (Exception ex)
            {
                Log(LogKind.Error, $"Connect failed: {DescribeError(ex)}");
            }
            finally
            {
                _isBusy = false;
                UpdateButtons();
            }
        }

        private async void OnDisconnectClick(object sender, RoutedEventArgs e)
        {
            if (_isBusy || _connection == null)
            {
                return;
            }

            _isBusy = true;
            UpdateButtons();
            try
            {
                await _connection.DisconnectAsync();
            }
            catch (Exception ex)
            {
                Log(LogKind.Error, $"Disconnect failed: {ex.Message}");
            }
            finally
            {
                _isBusy = false;
                UpdateButtons();
            }
        }

        private async void OnSignInClick(object sender, RoutedEventArgs e)
        {
            if (_isBusy)
            {
                return;
            }

            _isBusy = true;
            UpdateButtons();
            try
            {
                await SignInToEntraAsync(forceSignIn: true);
            }
            catch (Exception ex)
            {
                Log(LogKind.Error, $"Entra sign in failed: {ex.Message}");
            }
            finally
            {
                _isBusy = false;
                UpdateButtons();
            }
        }

        private async void OnSignOutClick(object sender, RoutedEventArgs e)
        {
            if (_isBusy || _entra == null)
            {
                return;
            }

            _isBusy = true;
            UpdateButtons();
            try
            {
                if (_connection?.IsConnected == true && EntraRadio.IsChecked == true)
                {
                    await _connection.DisconnectAsync();
                }

                await _entra.SignOutAsync();
                Log(LogKind.Info, "Signed out of Entra ID");
            }
            catch (Exception ex)
            {
                Log(LogKind.Error, $"Entra sign out failed: {ex.Message}");
            }
            finally
            {
                _isBusy = false;
                UpdateEntraStatus();
                UpdateButtons();
            }
        }

        private async Task<EntraTokenProvider> SignInToEntraAsync(bool forceSignIn = false)
        {
            if (!AppSettings.IsConfigured(_settings.Entra.ClientId))
            {
                throw new InvalidOperationException("Enter the client id of your Entra app registration in Settings.");
            }

            if (_entra == null)
            {
                _entra = new EntraTokenProvider(_settings.Entra, message => OnUi(() => Log(LogKind.Info, message)));
                _entra.TokenStateChanged += (_, _) => OnUi(() =>
                {
                    UpdateEntraStatus();
                    UpdateButtons();
                });
            }

            if (forceSignIn || !_entra.IsSignedIn || _entra.IsTokenExpired)
            {
                Log(LogKind.Info, "Signing in to Entra ID...");
                await _entra.SignInAsync(new WindowInteropHelper(this).Handle);
            }

            UpdateEntraStatus();
            return _entra;
        }

        private Task EnsureFreshTokenAsync()
        {
            return EntraRadio.IsChecked == true && _entra != null ? _entra.EnsureFreshTokenAsync() : Task.CompletedTask;
        }

        // ---------------------------------------------------------------------------------------------
        // Context groups: joining, broadcasting and reacting to context
        // ---------------------------------------------------------------------------------------------

        private void OnGroupChanged(object sender, SelectionChangedEventArgs e)
        {
            JoinSelectedGroup();
        }

        private void JoinSelectedGroup()
        {
            if (_channel == null)
            {
                return;
            }

            var group = (GroupCombo.SelectedItem as ComboBoxItem)?.Tag as string;
            if (group == null)
            {
                _channel.Leave();
                Log(LogKind.Info, "Left the context group");
            }
            else
            {
                _channel.Join(group);
                Log(LogKind.Info, $"Joined context group {group}");
            }
        }

        private void OnOrderSelected(object sender, SelectionChangedEventArgs e)
        {
            if (!_suppressBroadcast && BroadcastOnSelectCheck.IsChecked == true && OrdersGrid.SelectedItem is Order)
            {
                OnShareInstrumentClick(sender, e);
            }
        }

        private void OnShareInstrumentClick(object sender, RoutedEventArgs e)
        {
            if (OrdersGrid.SelectedItem is Order order)
            {
                _ = BroadcastAsync(Fdc3.Instrument(order.Ticker, order.InstrumentName));
            }
        }

        private void OnShareContactClick(object sender, RoutedEventArgs e)
        {
            if (OrdersGrid.SelectedItem is Order order)
            {
                _ = BroadcastAsync(Fdc3.Contact(order.TraderEmail, order.TraderName));
            }
        }

        private void OnShareOrganizationClick(object sender, RoutedEventArgs e)
        {
            if (OrdersGrid.SelectedItem is Order order)
            {
                _ = BroadcastAsync(Fdc3.Organization(order.CounterpartyLei, order.CounterpartyName));
            }
        }

        private async Task BroadcastAsync(Context context)
        {
            if (_channel?.CurrentGroup == null || _connection?.IsConnected != true)
            {
                Log(LogKind.Info, $"Not broadcast (connect and join a context group first): {Fdc3.Describe(context)}");
                return;
            }

            try
            {
                await EnsureFreshTokenAsync();
                await _channel.BroadcastAsync(context);
                Log(LogKind.Sent, $"{_channel.CurrentGroup}: {Fdc3.Describe(context)}");
            }
            catch (Exception ex)
            {
                Log(LogKind.Error, $"Broadcast failed: {DescribeError(ex)}");
            }
        }

        private void OnContextReceived(ContextEvent e)
        {
            var context = e.Context!;
            Log(LogKind.Received, $"{e.ContextGroup} from {e.Source?.SourceId}: {Fdc3.Describe(context)}");
            LastContextText.Text = $"{Fdc3.Describe(context)}\nfrom {e.Source?.SourceId} ({e.Source?.PlatformId}) on {e.ContextGroup}";

            if (Fdc3.IsType(context, Fdc3.ContextTypes.Instrument))
            {
                ShowOrdersForInstrument(context, fromIntent: false);
            }
            else if (Fdc3.IsType(context, Fdc3.ContextTypes.Contact))
            {
                ShowOrdersForContact(context, fromIntent: false);
            }
            else if (Fdc3.IsType(context, Fdc3.ContextTypes.Organization))
            {
                ShowOrdersForOrganization(context, fromIntent: false);
            }
        }

        // ---------------------------------------------------------------------------------------------
        // Intents: raising them from the blotter
        // ---------------------------------------------------------------------------------------------

        private void OnRaiseViewInstrumentClick(object sender, RoutedEventArgs e)
        {
            if (OrdersGrid.SelectedItem is Order order)
            {
                _ = RaiseIntentAsync(Fdc3.Intents.ViewInstrument, Fdc3.Instrument(order.Ticker, order.InstrumentName));
            }
        }

        private void OnRaiseViewContactClick(object sender, RoutedEventArgs e)
        {
            if (OrdersGrid.SelectedItem is Order order)
            {
                _ = RaiseIntentAsync(Fdc3.Intents.ViewContact, Fdc3.Contact(order.TraderEmail, order.TraderName));
            }
        }

        private void OnRaiseViewOrganizationClick(object sender, RoutedEventArgs e)
        {
            if (OrdersGrid.SelectedItem is Order order)
            {
                _ = RaiseIntentAsync(Fdc3.Intents.ViewOrganization, Fdc3.Organization(order.CounterpartyLei, order.CounterpartyName));
            }
        }

        private async Task RaiseIntentAsync(string intent, Context context)
        {
            if (_intents == null || _connection?.IsConnected != true)
            {
                Log(LogKind.Info, $"Connect before raising {intent}");
                return;
            }

            try
            {
                Log(LogKind.Sent, $"Raising {intent} with {Fdc3.Describe(context)}");
                await EnsureFreshTokenAsync();
                var (app, result) = await _intents.RaiseIntentAsync(intent, context);
                Log(LogKind.Received, $"{intent} handled by {app}, {(result == null ? "no result" : Fdc3.Describe(result))}");
            }
            catch (Exception ex)
            {
                Log(LogKind.Error, $"{intent} failed: {DescribeError(ex)}");
            }
        }

        // ---------------------------------------------------------------------------------------------
        // Reacting to context and intents in the blotter
        // ---------------------------------------------------------------------------------------------

        private Context? ShowOrdersForInstrument(Context context, bool fromIntent)
        {
            var ticker = Fdc3.GetId(context, "ticker");
            if (ticker == null)
            {
                return null;
            }

            var match = ShowMatchingOrders(order => string.Equals(order.Ticker, ticker, StringComparison.OrdinalIgnoreCase),
                $"Orders for {ticker}", fromIntent);

            if (match == null)
            {
                // No orders for the instrument yet, so get a ticket ready for one.
                TicketTicker.Text = ticker.ToUpperInvariant();
                TicketName.Text = context.Name ?? ticker;
            }

            return match == null ? null : Fdc3.Order(match.OrderId, Fdc3.Instrument(match.Ticker, match.InstrumentName));
        }

        private Context? ShowOrdersForContact(Context context, bool fromIntent)
        {
            var email = Fdc3.GetId(context, "email");
            var match = ShowMatchingOrders(order =>
                    !string.IsNullOrEmpty(email)
                        ? string.Equals(order.TraderEmail, email, StringComparison.OrdinalIgnoreCase)
                        : string.Equals(order.TraderName, context.Name, StringComparison.OrdinalIgnoreCase),
                $"Orders for trader {context.Name ?? email}", fromIntent);

            return match == null ? null : Fdc3.Order(match.OrderId, Fdc3.Instrument(match.Ticker, match.InstrumentName));
        }

        private Context? ShowOrdersForOrganization(Context context, bool fromIntent)
        {
            var lei = Fdc3.GetId(context, "LEI");
            var match = ShowMatchingOrders(order =>
                    !string.IsNullOrEmpty(lei)
                        ? string.Equals(order.CounterpartyLei, lei, StringComparison.OrdinalIgnoreCase)
                        : string.Equals(order.CounterpartyName, context.Name, StringComparison.OrdinalIgnoreCase),
                $"Orders with {context.Name ?? lei}", fromIntent);

            return match == null ? null : Fdc3.Order(match.OrderId, Fdc3.Instrument(match.Ticker, match.InstrumentName));
        }

        /// <summary>
        /// Filter and highlight the orders that match, returning the first one.
        /// </summary>
        private Order? ShowMatchingOrders(Predicate<Order> matches, string description, bool fromIntent)
        {
            foreach (var order in _orders)
            {
                order.IsHighlighted = matches(order);
            }

            var count = _orders.Count(order => order.IsHighlighted);
            _suppressBroadcast = true;
            try
            {
                _filter = count > 0 ? matches : null;
                _ordersView.Refresh();
                FilterText.Text = count > 0 ? $"{description} ({count})" : $"{description}: none";
                FilterPanel.Visibility = Visibility.Visible;
            }
            finally
            {
                _suppressBroadcast = false;
            }

            if (fromIntent)
            {
                if (WindowState == WindowState.Minimized)
                {
                    WindowState = WindowState.Normal;
                }

                Activate();
            }

            return _orders.FirstOrDefault(order => order.IsHighlighted);
        }

        private void OnClearFilterClick(object sender, RoutedEventArgs e)
        {
            _suppressBroadcast = true;
            _filter = null;
            foreach (var order in _orders)
            {
                order.IsHighlighted = false;
            }

            _ordersView.Refresh();
            _suppressBroadcast = false;
            FilterPanel.Visibility = Visibility.Collapsed;
        }

        private void OnCreateOrderClick(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(TicketTicker.Text)
                || !int.TryParse(TicketQuantity.Text, out var quantity)
                || !decimal.TryParse(TicketPrice.Text, NumberStyles.Number, CultureInfo.CurrentCulture, out var price))
            {
                Log(LogKind.Error, "Enter a ticker, a whole number quantity and a price to create an order.");
                return;
            }

            var template = _orders.First();
            var order = new Order
            {
                OrderId = $"ORD-{1001 + _orders.Count}",
                Ticker = TicketTicker.Text.Trim().ToUpperInvariant(),
                InstrumentName = string.IsNullOrWhiteSpace(TicketName.Text) ? TicketTicker.Text.Trim() : TicketName.Text.Trim(),
                Side = (OrderSide)TicketSide.SelectedItem,
                Quantity = quantity,
                Price = price,
                TraderName = template.TraderName,
                TraderEmail = template.TraderEmail,
                CounterpartyName = template.CounterpartyName,
                CounterpartyLei = template.CounterpartyLei
            };

            _orders.Insert(0, order);
            Log(LogKind.Info, $"Created {order.OrderId}: {order.Side} {order.Quantity} {order.Ticker} @ {order.Price}");
            OrdersGrid.SelectedItem = order;
        }

        // ---------------------------------------------------------------------------------------------
        // Status, log and plumbing
        // ---------------------------------------------------------------------------------------------

        private void OnAuthModeChanged(object sender, RoutedEventArgs e)
        {
            var useEntra = EntraRadio.IsChecked == true;
            BasicPanel.Visibility = useEntra ? Visibility.Collapsed : Visibility.Visible;
            EntraPanel.Visibility = useEntra ? Visibility.Visible : Visibility.Collapsed;
        }

        private void ShowStatus(ConnectionStatusChangedEventArgs e)
        {
            StatusText.Text = e.Status == ConnectionStatus.Connected && _connection?.SessionId != null
                ? $"Connected ({_settings.CloudInterop.PlatformId})"
                : e.Status.ToString();

            StatusLight.Fill = new SolidColorBrush(e.Status switch
            {
                ConnectionStatus.Connected => Colors.LimeGreen,
                ConnectionStatus.Connecting => Colors.Gold,
                ConnectionStatus.Reconnecting => Colors.Orange,
                ConnectionStatus.SessionExpired => Colors.OrangeRed,
                _ => Colors.Gray
            });

            Log(e.Status == ConnectionStatus.SessionExpired ? LogKind.Error : LogKind.Info, e.Message);
            UpdateButtons();
        }

        private void UpdateButtons()
        {
            var connected = _connection?.IsConnected == true;
            var signedIn = _entra?.IsSignedIn == true;
            var hasValidToken = signedIn && !_entra!.IsTokenExpired;
            ConnectButton.IsEnabled = !_isBusy && !connected;
            DisconnectButton.IsEnabled = !_isBusy && connected;
            BasicRadio.IsEnabled = !_isBusy && !connected;
            EntraRadio.IsEnabled = !_isBusy && !connected;
            UsernameBox.IsEnabled = !_isBusy && !connected;
            PasswordBox.IsEnabled = !_isBusy && !connected;
            SettingsButton.IsEnabled = !_isBusy && !connected;
            SignInButton.IsEnabled = !_isBusy && !hasValidToken;
            SignOutButton.IsEnabled = !_isBusy && signedIn;
        }

        private void UpdateEntraStatus()
        {
            var signedIn = _entra?.IsSignedIn == true;
            var details = _entra?.TokenDetails;
            EntraAccountText.Text = !signedIn
                ? "Not signed in"
                : _entra!.IsTokenExpired
                    ? $"{_entra.AccountName}  (token expired, sign in again)"
                    : $"{_entra.AccountName}  (iss {details?.Issuer}, aud {details?.Audience})";
            SignInButton.IsEnabled = !_isBusy && !(signedIn && !_entra!.IsTokenExpired);
            SignOutButton.IsEnabled = !_isBusy && signedIn;
        }

        private void PopulateContextGroups()
        {
            GroupCombo.Items.Add(new ComboBoxItem { Content = "(none)" });
            foreach (var group in ContextGroups)
            {
                var content = new StackPanel { Orientation = Orientation.Horizontal };
                content.Children.Add(new Ellipse { Width = 10, Height = 10, Fill = new SolidColorBrush(group.Color), Margin = new Thickness(0, 0, 6, 0) });
                content.Children.Add(new TextBlock { Text = group.Name });
                GroupCombo.Items.Add(new ComboBoxItem { Content = content, Tag = group.Name });
            }
        }

        private void Log(LogKind kind, string message)
        {
            _log.Insert(0, new LogEntry(kind, message));
            if (_log.Count > 500)
            {
                _log.RemoveAt(_log.Count - 1);
            }
        }

        private void OnCopyLogExecuted(object sender, ExecutedRoutedEventArgs e)
        {
            var lines = LogList.SelectedItems
                .Cast<LogEntry>()
                .OrderBy(entry => _log.IndexOf(entry))
                .Select(entry => $"{entry.Time:HH:mm:ss}  {entry.Kind,-8}  {entry.Message}");
            Clipboard.SetText(string.Join(Environment.NewLine, lines));
        }

        private void OnCopyLogCanExecute(object sender, CanExecuteRoutedEventArgs e)
        {
            e.CanExecute = LogList.SelectedItems.Count > 0;
        }

        private static string DescribeError(Exception ex)
        {
            var message = ex is CloudInteropAPIError apiError && apiError.ErrorCode != null
                ? $"{apiError.ErrorCode}: {ex.Message}"
                : ex.Message;
            return ex.InnerException == null ? message : $"{message} ({ex.InnerException.Message})";
        }

        private void OnUi(Action action)
        {
            Dispatcher.InvokeAsync(action);
        }

        private Task<T> OnUiAsync<T>(Func<T> func)
        {
            return Dispatcher.InvokeAsync(func).Task;
        }

        protected override void OnClosed(EventArgs e)
        {
            DisposeCloudInterop();
            _entra?.Dispose();
            base.OnClosed(e);
        }
    }
}
