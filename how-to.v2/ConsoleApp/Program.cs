using OpenFin.Net.Adapter;

class Program
{

    static void Main(string[] args)
    {
        Console.WriteLine("Connecting to OpenFin");

        var runtime = new RuntimeFactory()
                         .GetRuntimeInstance(new RuntimeOptions
                         {
                             Version = "stable",
                             UUID = "wpf-test-app2-provider",
                         });

        runtime.Connected += Runtime_Connected;
        runtime.Disconnected += Runtime_Disconnected;
        
        if (runtime.ConnectAsync().Wait(10000))
        {
            Console.WriteLine("Connected to OpenFin");
        }
        else
        {
            Console.WriteLine("Timeout connecting to OpenFin");
        }
        
        Console.WriteLine("Press any key to exit.");
        Console.ReadLine();

        if(runtime.IsConnected) 
        {
            Console.WriteLine("Disconnecting from runtime.");
            runtime.DisconnectAsync().Wait(10000);
        }
    }

    private static void Runtime_Disconnected(object? sender, EventArgs e)
    {
        Console.Write("Disconnected");
    }

    private static void Runtime_Connected(object? sender, EventArgs e)
    {
        Console.WriteLine("Connected Event");
    }

}