using OpenFin.Net.Adapter;
using OpenFin.Net.Adapter.Channels;
using OpenFin.Net.Adapter.Interop;

namespace TestApp.Tests;

[TestClass]
public class ChannelProviderTests
{
    [TestMethod]
    public void TestTheVMCorrectlyInvokesTheProvider()
    {
        var channelsMock = new Mock<IChannels>();
        var channelClient = new Mock<IChannelClient>();

        // We are going to mock the CreateClient call and return a mock of a channel client
        channelsMock.Setup(x => x.CreateClient("my-channel"))
                    .Returns(channelClient.Object);

        // Mock the runtime to return a channels mock when requested
        var runtimeMock = new Mock<IRuntime>();
        runtimeMock.Setup(x => x.GetService<IChannels>())
                   .Returns(channelsMock.Object);

        // Create our view model and give it the runtime mock
        var vm = new MainWindowVM(runtimeMock.Object);

        // Pretend we clicked the connect to channel
        vm.ConnectToChannel.Execute(null);

        // We will mock the dispatch call to the provider and return a fake result to ensure our code handles it correctly
        channelClient.Setup(x => x.DispatchAsync<int>("add", new { a = 10, b = 20 }))
                     .ReturnsAsync(30);

        // Pretend we clicked the add button
        vm.AddNumberCommand.Execute(new
        {
            a = 10,
            b = 20
        });

        // Check the result
        Assert.AreEqual(30, vm.ProviderResult);
    }
    
    [TestMethod]
    public void TestProviderAddHandlerCorrectlyUpdatesTheTotal()
    {
        Func<int, IChannelClient, int> topicHandler = null;
        var channelsMock = new Mock<IChannels>();

        var providerClientMock = new Mock<IChannelProvider>();

        // We are going to mock the create provider call and return a mock of a provider client
        channelsMock.Setup(x => x.CreateProvider("my-provider"))
                    .Returns(providerClientMock.Object);

        // Mock the runtime to return a channels mock when requested
        var runtimeMock = new Mock<IRuntime>();
        runtimeMock.Setup(x => x.GetService<IChannels>())
                   .Returns(channelsMock.Object);

        // When the client code calls RegisterTopic we want to capture the passed handler so we can invoke it directly later
        providerClientMock.Setup(x => x.RegisterTopic<int,int>("add", It.IsAny<Func<int,IChannelClient,int>>()))
                         .Callback((string topic, Func<int, IChannelClient, int> handler) =>
                         {
                             topicHandler = handler;
                         });
        
        // Create our view model and give it the runtime mock
        var vm = new MainWindowVM(runtimeMock.Object);
        
        // Pretend we clicked the create provider button
        vm.CreateProviderCommand.Execute(null);

        // Should have the context handler now ready for us to invoke directly with a dummy context
        Assert.IsNotNull(topicHandler, "RegisterTopic should have been called by this point");

        // Invoke the handler with some well known data to act like the provider received a real request
        topicHandler(10, new Mock<IChannelClient>().Object);

        // Validate the handler did what it was supposed to do
        Assert.AreEqual(10, vm.CurrentValue);

        // Invoke the handler with some different data this time
        topicHandler(30, new Mock<IChannelClient>().Object);

        // Validate the handler did what it was supposed to do, in this case update the total
        Assert.AreEqual(40, vm.CurrentValue);
    }
}