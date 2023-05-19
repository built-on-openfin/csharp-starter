using OpenFin.Net.Adapter;
using OpenFin.Net.Adapter.Channels;

namespace TestApp.Tests;

[TestClass]
public class InteropTests
{
    [TestMethod]
    public void TestCurrentIdIsCorrectlySetAfterAContextChange()
    {
        ContextHandler contextHandler = null;
        var channelsMock = new Mock<IChannels>();
        var interopMock = new Mock<IInterop>();
        var interopClientMock = new Mock<IInteropClient>();
        
        interopMock.Setup(x => x.ConnectAsync(It.IsAny<string>()))
                   .ReturnsAsync( interopClientMock.Object );

        // When the client code 
        interopClientMock.Setup(x => x.AddContextHandlerAsync(It.IsAny<ContextHandler>(), "my-context"))
                         .Callback((ContextHandler handler, string contextType) =>
                         {
                             contextHandler = handler;
                         });

        // Mock the runtime to return an interop mock when requested
        var runtimeMock = new Mock<IRuntime>();
        runtimeMock.Setup(x => x.GetService<IInterop>())
                   .Returns(interopMock.Object);

        // Create our view model and give it the runtime mock
        var vm = new MainWindowVM(runtimeMock.Object);

        // Pretend the connect to interop broker button has been clicked
        vm.ConnectToBrokerCommand.Execute(null);

        // Should have the context handler now ready for us to invoke directly with a dummy context
        Assert.IsNotNull(contextHandler, "AddContextHandler should have been called by this point");

        // Set an initial context
        contextHandler(new Context
        {
            Type = "fdc3.contact",
            Id = new JsonObject
                    {
                        { "email", "john.mchugh@gmail.com" }
                    }
        });

        Assert.AreEqual("john.mchugh@gmail.com", vm.CurrentId);

        // Change it
        contextHandler(new Context
        {
            Type = "fdc3.contact",
            Id = new JsonObject
                    {
                        { "email", "mary.rose@hotmail.com" }
                    }
        });

        Assert.AreEqual("mary.rose@hotmail.com", vm.CurrentId);

        // Change it to a different context type
        contextHandler(new Context
        {
            Type = "fdc3.instrument",
            Id = new JsonObject
                    {
                        { "isin", "abcdefg123" }
                    }
        });

        // Should have ignored any other context types
        Assert.AreEqual("mary.rose@hotmail.com", vm.CurrentId);
    }
}