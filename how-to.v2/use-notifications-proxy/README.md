# Native Application Example of using a Proxy Service to send Notifications

This example contains 2 applications. There is one  Winforms application. There is is a OpenFIn Platform application that acts as the proxy. The Winforms application sends Notification messages to this proxy application, using the OpenFin Channel API. The Platform application in turn create a notification object and dispatches it to the Notification Center.



## Building the Native applications.

1. Each application has its own solution. 
2. Ensure that the OpenFin packages are installed.
3. Build the solution normally.



## Build the Platform application:

1. Ensure that you are in the sub-folder that contains the code.

2. Run 

   ```
   npm run setup
   ```

    to install the dependencies

3. Run 

   ```
   npm run build
   ```

    to build the client component.

   * **Note**. Please remember to repeat steps 1 though 3 each time you modify the code. 

4. Run 

   ```
   npm run start 
   ```

   to start the generic http server that will serve static files.

5. Open a new Terminal / Command Window in the same sub-folder as step 1. Run 

   ```
   npm run client
   ```

    to run the client component.



## Testing end to end process flow.

Ensure that the node js client application window displays a message that says : 

```
Connected Version: 1.22.1

Is Connected: true

New channel provider created: notification-channel

Platform registered

Number of notifications in the Notification Center is 3

Library Version: 1.22.0
```



Run Native application.

Click on Connect to Channel. After a few seconds you should see a message that says "Client Connected to Channel"

Click on "Send Simple Notification". Two things should happen. One, you see a notification pop up on your screen. The default location is the bottom right. Second, you should see a message in the Native application that says: "Simple Notification dispatched.". 

If you do not see that message then you have encountered an error. This error will be displayed in the Node JS application window.

Click on "Send Notification - User Input". Three things will happen now. You will see a notification pop up that will ask you for some input. Input some text and and click "Save". Finally you should see what you typed in the notification appear in the window of your native app.