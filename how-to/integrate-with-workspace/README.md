# How To - Integrate with Workspace

An example of interop with native applications and a workspace platform.

This example connects two different native applications to a workspace platform. The implementation of the workspace platform is on our workspace starter repo: <https://github.com/built-on-openfin/workspace-starter/tree/main/how-to/customize-workspace>.

It shows how a native application and a workspace platform could work together so that the native applications could provide a list of apps to a platform, issues commands against a workspace platform (show home etc) and provide information so that the native application can be part of a saved workspace.
## Windows Forms .NET 4.8 Test Harness

Open:
`framework\OpenFin.WindowsForm.TestHarness.sln`

* restore nuget packages.
* debug the project OpenFin.WindowsForm.TestHarness or start without debugging.

It will run the main form and that will instantiate the workspace class which launches OpenFin Workspace and connects it to your native app.

When home shows hit enter. You can see all of the applications returned from your Winform App (and any of your other connected apps).

## WPF .NET 6.0 Test Harness

Open:

`framework\OpenFin.WPF.TestHarness\OpenFin.WPF.TestHarness.sln`

* restore nuget packages.
* debug the project OpenFin.WPF.TestHarness or start without debugging.

It will run the main WPF form and that will instantiate the workspace class which launches OpenFin Workspace (if it isn't already running) and connects it to your native app.

When home shows hit enter.

This will show a WPF App 1 entry on it's own or it will include the Winform Applications if that test harness is also running.

## Running

Capabilities:

* Ctrl + Space will bring up the Home UI.
* You can filter using text or using the tags filter
* Hitting enter launches the selected app
* typing /store will let you launch the store which will let you browse your available applications.

You can save a workspace by using the workspace menu in the OpenFin Workspace Browser or you can type the following into home /w myworkspace.

The Native applications connect to a specific channel api exposed by the workspace platform. This is configured in the workspace platform's manifest file and defined in the App.config files of the native applications. 