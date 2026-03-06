using System;
using System.IO;
using System.Windows;
using System.Windows.Threading;

namespace interop_intents_v1
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            // Handle non-UI thread exceptions
            AppDomain.CurrentDomain.UnhandledException += CurrentDomain_UnhandledException;

            App app = new App();
            app.InitializeComponent();
            app.DispatcherUnhandledException += Application_DispatcherUnhandledException;
            app.Run();
        }

        private static void Application_DispatcherUnhandledException(object sender, DispatcherUnhandledExceptionEventArgs e)
        {
            HandleException(e.Exception, "UI Thread Exception");
            e.Handled = true;
        }

        private static void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs e)
        {
            HandleException(e.ExceptionObject as Exception, "Unhandled Exception");
        }

        private static void HandleException(Exception ex, string source)
        {
            try
            {
                string errorMessage = $"[{DateTime.Now:yyyy-MM-dd HH:mm:ss}] {source}\r\n" +
                                     $"Message: {ex?.Message}\r\n" +
                                     $"StackTrace: {ex?.StackTrace}\r\n" +
                                     $"InnerException: {ex?.InnerException?.Message}\r\n" +
                                     new string('-', 80) + "\r\n\r\n";

                // Write to log file
                string logPath = Path.Combine(
                    Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData),
                    "HERE.CsharpStarter.V1.Interop.WPFIntentsExample",
                    "Logs"
                );
                Directory.CreateDirectory(logPath);
                string logFile = Path.Combine(logPath, $"error_log_{DateTime.Now:yyyyMMdd}.txt");
                File.AppendAllText(logFile, errorMessage);

                // Show error dialog (WPF)
                MessageBox.Show(
                    $"An error occurred:\n\n{ex?.Message}\n\nDetails have been logged to:\n{logFile}",
                    "Application Error",
                    MessageBoxButton.OK,
                    MessageBoxImage.Error
                );
            }
            catch (Exception logEx)
            {
                // Fallback if logging fails
                MessageBox.Show(
                    $"Critical Error:\n{ex?.Message}\n\nLogging failed: {logEx.Message}",
                    "Critical Error",
                    MessageBoxButton.OK,
                    MessageBoxImage.Stop
                );
            }
        }
    }
}