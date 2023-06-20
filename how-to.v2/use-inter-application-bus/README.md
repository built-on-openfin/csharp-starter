# Example of Inter-Application Bus API communication
This is a simple example that shows how to use the IAB api to send messages between applications.

## How to run this example

1. Ensure that you have installed the following nuget packages:  
- OpenFin.Net.Adapter (minimum 29.2.0)  
2. Build the solution without errors
3. Navigate to the folder that has the executable, typically this will be in "how-to.v2\IAB\bin\Debug\net6.0-windows"  
4. Run the IAB.exe.  
5. Click on "Connect". ![Step-5](Step-5-Connect.png) Verify that you get the "Connected" message in the red box at the top.
6. Click on "IAB Subscribe". ![Step-6](Step-6-Subscribe.png) Verify that you get a message "Subscribed to topic ...." in the area under the buttons. 
7. Click "IAB Publish". You should see a message appear in the area under the buttons. ![Step-7](Step-7-MsgPublish.png)
8. Click "IAB Unsubscribe" and then repeat step 7. This time the message will not be received.  
![Step-8](Step-8-Unsubscribe.png)
9. Please make sure that you click "Disconnect" once you have verified that the tests are working, and prior to closing the windows.
 ![Step-9](Step-9-Disconnect.png)