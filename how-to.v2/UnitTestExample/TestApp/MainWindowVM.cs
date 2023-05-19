using System;
using System.ComponentModel;
using System.Diagnostics;
using System.Text.Json.Nodes;
using System.Windows.Input;
using OpenFin.Net.Adapter;
using OpenFin.Net.Adapter.Channels;
using OpenFin.Net.Adapter.Interop;

namespace TestApp;

internal class MainWindowVM : INotifyPropertyChanged
{
    private readonly IRuntime runtime;
    private IChannelClient channelClient;
    private IChannelProvider provider;
    
    private ICommand connectToBrokerCommand;
    private ICommand addNumberCommand;
    private ICommand connectToChannelCommand;
    private ICommand createProviderCommand;

    private IInteropClient interopClient;

    public event PropertyChangedEventHandler? PropertyChanged;
    
    public MainWindowVM(IRuntime runtime)
    {
        connectToBrokerCommand = new DelegateCommand(HandleConnectToBroker);
        addNumberCommand = new DelegateCommand(HandleAddNumberCommand);
        connectToChannelCommand = new DelegateCommand(HandleConnectToChannelCommand);
        createProviderCommand = new DelegateCommand(HandleCreateProviderCommand);
        
        this.runtime = runtime;
    }


    private string currentId = string.Empty;
    public string CurrentId
    {
        get => currentId;
        set
        {
            if ( value != currentId )
            {
                currentId = value;
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(CurrentId)));
            }
        }
    }

    private int providerResult = 0;
    public int ProviderResult
    {
        get => providerResult;
        set
        {
            if (value != providerResult)
            {
                providerResult = value;
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(ProviderResult)));
            }
        }
    }

    private int currentValue = 0;
    public int CurrentValue
    {
        get => currentValue;
        set
        {
            if (value != currentValue)
            {
                currentValue = value;
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(CurrentValue)));
            }
        }
    }

    public ICommand ConnectToBrokerCommand => connectToBrokerCommand;
    public ICommand ConnectToChannel => connectToChannelCommand;
    public ICommand AddNumberCommand => addNumberCommand;
    public ICommand CreateProviderCommand => createProviderCommand;

    private async void HandleConnectToBroker(object obj)
    {
        var interop = runtime.GetService<IInterop>();
        interopClient = await interop.ConnectAsync("support-context-and-intents").ConfigureAwait(true);

        await interopClient.AddContextHandlerAsync(HandleContext, "my-context");
    }

    private void HandleContext(Context context)
    {
        if (context.Type == "fdc3.contact")
        {
            if ((context.Id as JsonObject).TryGetPropertyValue("email", out var valueNode))
            {
                CurrentId = valueNode.ToString();
            }
        }
    }

    private async void HandleConnectToChannelCommand(object obj)
    {
        var channels = runtime.GetService<IChannels>();

        channelClient = channels.CreateClient("my-channel");
        await channelClient.ConnectAsync();
    }
    
    private async void HandleAddNumberCommand(object obj)
    {
        dynamic dyn = obj;
        var result = await channelClient.DispatchAsync<int>("add", dyn);

        ProviderResult = result;
    }
    

    private async void HandleCreateProviderCommand(object obj)
    {
        var channels = runtime.GetService<IChannels>();

        provider = channels.CreateProvider("my-provider");

        provider.RegisterTopic<int,int>("add", (payload, channel) =>
        {
            CurrentValue += payload;
            return CurrentValue;
        });
        
        await provider.OpenAsync();
        
    }
}
