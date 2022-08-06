# OpenFin Native Applications

A repo for demonstrating interop with native applications.

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

If the two main windows are closed then the workspace platform will close and so will OpenFin Workspace. If either of the applications are still running then the workspace platform is running and the available applications from the remaining native app are available.
