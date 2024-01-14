# Testing the OpenFin APIs from within an Asp.Net Core MVC application, using only the server side and client side functionality

This example shows you how to use the OpenFin api using server side processing of information received from the client side cshtml view. within the cshtml view file. The sample demonstrates the sendContext (fire a context) and addContextListener (listen for / receive context broadcasts)  apis.

This application will connect to the OpenFin workspace platform. The implementation of the platform can be found in our workspace starter repo, namely the "support-context-and-intents" sample - https://github.com/built-on-openfin/workspace-starter/tree/main/how-to/support-context-and-intents.

The client application is run from within this example.



Modifications to the platform sample.

Please replace the apps-contact.json file in the support-context-and-intents with the file included in the folder available in this repo, named (platform-files)

Please add the filemvc-serverside-app.view.fin.json to the ..\support-context-and-intents\public\common\views\contact folder.

Build and run the platform sample according to the instructions listed in the readme.md file for that sample.

Next:

* Build the .net Application either through Visual Studio or via VS Code by running `dotnet build`
* Start the .net Application manually (F5) from within Visual Studio or from VS Code via the `dotnet run` command
* Open the mvc client application by starting it from within the platform application's Home screen by selecting the "MVC ServerSide App" entry
* Open the "Context using InterOp API" from the Home screen in the platform application
* Set both the MVC App and the InterOp windows to the green channel
* You can now send contexts back and forth between the two applications

