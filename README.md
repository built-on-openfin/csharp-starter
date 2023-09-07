# csharp-starter
This starter is focused on giving examples related to our C# adapter.

The examples are broken out by the two versions of the adapter that we support :

### how-to.v1 

This location contains the code that is supported by the version 1 of the dot net adapter (OpenfinDesktop 17.4.0). It supports a minimum of .Net framework 4.5.2 and .Net Core 3.1.

| Documentation                                                | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [How To Create A Snapshot Client](./how-to.v1/create-a-snapshot-source-client) | This example shows you how you can ask a platform for a snapshot to save as part of your native application state (where the platform is a child view of your native app) |
| [How To Integrate with Workspace](./how-to.v1/integrate-with-workspace) | This gives an example of how a Native Apps can integrate with a workspace platform (e.g. provide snapshot data from a native app to a platform, provide search results or call actions against a platform). |
| [How To Use Notifications](./how-to.v1/use-notifications)    | This gives an example of how Native Apps can create and use Notifications with a workspace platform |
| [Automation Testing](./how-to.v1/automation-testing)         | An example of how an embedded web view can be tested using the OpenFin Automation testing packages. |
| [Use A Notification Proxy](./how-to.v1/use-notifications-proxy) | An example that shows how a native app can connect to a platform app via channels and send notification requests to it. This platform app is then responsible for creating the notifications. The advantage of this is faster development, less code upkeep on the part of the native app developers, as all updates to notifications can be implemented in the platform app itself. Furthermore, the platform app can service the needs of multiple native apps. |

##### Other Resources

- [How to use the Embedded WebView](https://github.com/openfin/embedding-wpf-demo)



### how-to.v2

This location contains the code that is supported by the version 2 of the dot net adapter (Openfin.Net.Adapter 29.2.0). It supports .Net framework 6.0 and .Net 7.0.

| Documentation                                                | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Channels](./how-to.v2/use-channels-api)             | This example shows you how you perform simple inter-process communication via the Channel API |
| [Console App](./how-to.v2/simple-console-app)                | This application demonstrates a simple way to connect to the OpenFin runtime environment. |
| [IAB](./how-to.v2/use-inter-application-bus)                 | This is a simple example that shows how to use the IAB api to send messages between applications. |
| [Interop](./how-to.v2/fire-intents)                          | This is a simple example that shows how to use the InterOp API to fire intents that will be picked up and processed by the OpenFin Workspace InterOp Broker. |
| [Simple Connect](./how-to.v2/simple-console-app)             | A simple example showing how to connect to the OpenFin runtime. |
| [Snapshot Source](./how-to.v2/save-load-snapshots)           | This example demonstrates creating a snapshot source client in your platform and calling it from a C# application. |
| [Use Notifications Proxy](./how-to.v2/use-notifications-proxy) | An example that shows how a native app can connect to a platform app via channels and send notification requests to it. This platform app is then responsible for creating the notifications. The advantage of this is faster development, less code upkeep on the part of the native app developers, as all updates to notifications can be implemented in the platform app itself. Furthermore, the platform app can service the needs of multiple native apps. |
| [Unit Testing](./how-to.v2/unit-test-example)                | An example showing how to create unit tests for OpenFin Channel API and InterOp. |
| [Use a SideCar App - Basic](./how-to.v2/use-a-sidecar-app-basic)                | An example showing how to create a C# sidecar app to be used by a web OpenFin platform. |



## Documentation

- [.NET Adapter](https://developers.openfin.co/of-docs/docs/net-api)
- [.NET API Docs](https://developer.openfin.co/docs/csharp/latest/OpenfinDesktop/html/F7F260CA.htm)
- [.NET Notification API Docs](https://developer.openfin.co/docs/services/dotnet-notifications/latest/html/42B77E13.htm)
