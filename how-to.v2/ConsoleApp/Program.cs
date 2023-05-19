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
        if (runtime.ConnectAsync().Wait(5000))
        {
            Console.WriteLine("Connected to OpenFin");
        }
        else
        {
            Console.WriteLine("Timeout connecting to OpenFin");
        }
        

        Console.ReadLine();
    }

    private static void Runtime_Connected(object? sender, EventArgs e)
    {
        Console.WriteLine("Connected Event");
    }

}