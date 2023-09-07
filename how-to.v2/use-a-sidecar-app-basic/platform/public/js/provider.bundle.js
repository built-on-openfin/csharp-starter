/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
let loggingElement;
let clearLogsBtn;
let connectToSideCarBtn;
let dispatchMessageToSideCarBtn;
let channelClient;
const SIDECAR_APP_ALIAS = "sidecar-app";
const SIDECAR_APP_TARGET = "SideCar.App.exe";
const SIDECAR_APP_SRC = `${location.origin}/assets/sidecar-app.zip`;
/**
 * Wait for the DOM to have been loaded before we connect the UI elements and initialize the platform.
 */
window.addEventListener("DOMContentLoaded", async () => {
    await initializeDom();
    await initializePlatform();
});
/**
 * Initialize the DOM elements.
 */
async function initializeDom() {
    loggingElement = document.querySelector("#logging");
    const loggingContainer = document.querySelector("#logging-container");
    if (!loggingElement || !loggingContainer) {
        return;
    }
    loggingContainer.style.display = "flex";
    clearLogsBtn = document.querySelector("#btnClear");
    clearLogsBtn?.addEventListener("click", () => loggingElement ? loggingElement.textContent = "" : null);
    connectToSideCarBtn = document.querySelector("#btnConnectToSideCarApp");
    connectToSideCarBtn?.addEventListener("click", async () => {
        await setupSideCarApp();
        if (connectToSideCarBtn !== null) {
            connectToSideCarBtn.disabled = true;
        }
        if (dispatchMessageToSideCarBtn !== null) {
            dispatchMessageToSideCarBtn.disabled = false;
        }
    });
    dispatchMessageToSideCarBtn = document.querySelector("#btnDispatchMessageToSideCarApp");
    dispatchMessageToSideCarBtn?.addEventListener("click", dispatchMessageToSideCarApp);
}
/**
 * Initialize the Platform.
 */
async function initializePlatform() {
    try {
        await fin.Platform.init({});
        loggingAddEntry("Platform initialized.");
    }
    catch (error) {
        loggingAddEntry(`There was an error while trying to initialize your platform. Error: ${getErrorMessage(error)}`);
    }
}
/**
 * Return a message from an error.
 * @param error The error to inspect and retrieve the message from
 * @returns The error message
 */
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.message;
    return String(error);
}
/**
 * Create and assign a channel client
 * @returns channel client
 */
async function createChannelClient() {
    const channelName = "sidecar-app";
    const channelClient = await fin.InterApplicationBus.Channel.connect(channelName, { payload: "Payload from platform" });
    loggingAddEntry(`Connection To SideCar App on channel: ${channelName} established.`);
    return channelClient;
}
/**
 * Fetch the SideCar App, Launch it and Connect to it via Channels.
 */
async function setupSideCarApp() {
    await fetchSideCarAppIfNeeded();
    await launchSideCarApp();
    await createChannelClientAndRegisterListeners();
}
/**
 * Create a connection to the SideCar application.
 */
async function createChannelClientAndRegisterListeners() {
    channelClient = await createChannelClient();
    if (channelClient !== null) {
        channelClient.onDisconnection((identity) => {
            console.log("onDisconnection identity: ", identity);
            loggingAddEntry(`onDisconnection identity: ${JSON.stringify(identity)}`);
            if (connectToSideCarBtn !== null) {
                connectToSideCarBtn.disabled = false;
            }
            if (dispatchMessageToSideCarBtn !== null) {
                dispatchMessageToSideCarBtn.disabled = true;
            }
            loggingAddEntry("Client has been disconnected from the SideCar App");
        });
        // received request over channel to display a message
        channelClient.register('sidecar-app-client-subscriber', async (payload) => {
            loggingAddEntry(`Message received from SideCar App: ${payload}`);
        });
    }
}
/**
 * Send an example message to the SideCar application.
 */
async function dispatchMessageToSideCarApp() {
    try {
        if (channelClient !== undefined) {
            loggingAddEntry("Sending Message to SideCar App.");
            let response = await channelClient.dispatch("sidecar-app-echo", "Message from platform to sidecar");
            loggingAddEntry(`Message sent to SideCar App and response received: ${response}.`);
        }
        else {
            loggingAddEntry("Unable to sending message to SideCar App as the platform is not currently connected to it.");
        }
    }
    catch (error) {
        console.error("There was an error trying to send a message to the SideCar App", error);
        loggingAddEntry(`Error sending message to SideCar App:  \n\n\t${getErrorMessage(error)}`);
    }
}
/**
 * Add a new entry in to the logging window.
 * @param entry The entry to add.
 */
function loggingAddEntry(entry) {
    if (loggingElement) {
        loggingElement.textContent = `${entry}\n\n${loggingElement.textContent}`;
    }
}
/**
 * Fetches the SideCar Asset if it hasn't been specified in the manifest.
 * We are forcing the download each time it is run but you could fetch the asset
 * info from a service and the version number would indicate whether or not it was needed.
 */
async function fetchSideCarAppIfNeeded() {
    const app = await fin.Application.getCurrent();
    const manifest = await app.getManifest();
    loggingAddEntry("Checking to see if SideCar App is defined as an AppAsset in the manifest.");
    if (!Array.isArray(manifest.appAssets)) {
        loggingAddEntry("No App Assets Defined. Doing a direct download of the SideCar App.");
        await fetchSideCarApp();
        return;
    }
    const appAssets = manifest.appAssets;
    if (appAssets.some(entry => entry.alias === SIDECAR_APP_ALIAS)) {
        loggingAddEntry("SideCar App defined in Manifest. No need to fetch through code.");
        return;
    }
    await fetchSideCarApp();
}
/**
* Shows downloading the SideCar App as an app asset.
*/
async function fetchSideCarApp() {
    try {
        const appAsset = {
            src: SIDECAR_APP_SRC,
            alias: SIDECAR_APP_ALIAS,
            version: "1.0.0",
            target: SIDECAR_APP_TARGET,
            force: true
        };
        loggingAddEntry("Fetching SideCar App through fin.System.downloadAsset.");
        await fin.System.downloadAsset(appAsset, (progress => {
            const downloadedPercent = Math.floor((progress.downloadedBytes / progress.totalBytes) * 100);
            loggingAddEntry(`Downloaded ${downloadedPercent}% of SideCar App`);
        }));
        loggingAddEntry("SideCar App is downloaded.");
    }
    catch (err) {
        loggingAddEntry(`There has been an error when trying to fetch the SideCar App: ${getErrorMessage(err)}`);
    }
}
/**
 * Launch SideCar App.
 */
async function launchSideCarApp() {
    const sideCarApp = {
        alias: SIDECAR_APP_ALIAS,
        lifetime: "application",
        listener: (result) => {
            console.log("result", result);
            if (result.exitCode === 1) {
                console.log(`Successfully exited ${SIDECAR_APP_TARGET}`);
            }
        }
    };
    try {
        loggingAddEntry("Launching SideCar App.");
        const data = await fin.System.launchExternalProcess(sideCarApp);
        console.log("successfully launched SideCar App:", data);
        loggingAddEntry("SideCar App Launched.");
    }
    catch (err) {
        console.error(err);
        loggingAddEntry(`There was an error launching the SideCar App: ${getErrorMessage(err)}`);
    }
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxFQUFFLGlCQUFpQjtRQUN4QixRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixrQkFBa0IsRUFBRSxDQUFDLENBQUM7YUFDekQ7UUFDRixDQUFDO0tBQ0QsQ0FBQztJQUNGLElBQUk7UUFDSCxlQUFlLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMxQyxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUN6QztJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixlQUFlLENBQUMsaURBQWlELGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDekY7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NoYXJwLXN0YXJ0ZXItLXVzZS1zaWRlY2FyLWFwcC1iYXNpYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jc2hhcnAtc3RhcnRlci0tdXNlLXNpZGVjYXItYXBwLWJhc2ljL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3NoYXJwLXN0YXJ0ZXItLXVzZS1zaWRlY2FyLWFwcC1iYXNpYy8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5pbXBvcnQgdHlwZSB7IENoYW5uZWxDbGllbnQgfSBmcm9tIFwiQG9wZW5maW4vY29yZS9zcmMvT3BlbkZpblwiO1xuXG5sZXQgbG9nZ2luZ0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbmxldCBjbGVhckxvZ3NCdG46IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbDtcbmxldCBjb25uZWN0VG9TaWRlQ2FyQnRuOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw7XG5sZXQgZGlzcGF0Y2hNZXNzYWdlVG9TaWRlQ2FyQnRuOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw7XG5sZXQgY2hhbm5lbENsaWVudCA6IENoYW5uZWxDbGllbnQ7XG5cbmNvbnN0IFNJREVDQVJfQVBQX0FMSUFTID0gXCJzaWRlY2FyLWFwcFwiO1xuY29uc3QgU0lERUNBUl9BUFBfVEFSR0VUID0gXCJTaWRlQ2FyLkFwcC5leGVcIjtcbmNvbnN0IFNJREVDQVJfQVBQX1NSQyA9IGAkeyBsb2NhdGlvbi5vcmlnaW4gfS9hc3NldHMvc2lkZWNhci1hcHAuemlwYDsgXG4vKipcbiAqIFdhaXQgZm9yIHRoZSBET00gdG8gaGF2ZSBiZWVuIGxvYWRlZCBiZWZvcmUgd2UgY29ubmVjdCB0aGUgVUkgZWxlbWVudHMgYW5kIGluaXRpYWxpemUgdGhlIHBsYXRmb3JtLlxuICovXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRhd2FpdCBpbml0aWFsaXplRG9tKCk7XG5cdGF3YWl0IGluaXRpYWxpemVQbGF0Zm9ybSgpO1xufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplRG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRsb2dnaW5nRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nZ2luZ1wiKTtcblx0Y29uc3QgbG9nZ2luZ0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dnaW5nLWNvbnRhaW5lclwiKTtcblxuXHRpZiAoIWxvZ2dpbmdFbGVtZW50IHx8ICFsb2dnaW5nQ29udGFpbmVyKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bG9nZ2luZ0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHRcblxuXHRjbGVhckxvZ3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkNsZWFyXCIpO1xuXHRjbGVhckxvZ3NCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2dnaW5nRWxlbWVudCA/IGxvZ2dpbmdFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIiA6IG51bGwpO1xuXG5cdGNvbm5lY3RUb1NpZGVDYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkNvbm5lY3RUb1NpZGVDYXJBcHBcIik7XG5cdGNvbm5lY3RUb1NpZGVDYXJCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKT0+IHtcblx0XHRhd2FpdCBzZXR1cFNpZGVDYXJBcHAoKTtcblx0XHRpZihjb25uZWN0VG9TaWRlQ2FyQnRuICE9PSBudWxsKSB7XG5cdFx0XHRjb25uZWN0VG9TaWRlQ2FyQnRuLmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdFx0aWYoZGlzcGF0Y2hNZXNzYWdlVG9TaWRlQ2FyQnRuICE9PSBudWxsKSB7XG5cdFx0XHRkaXNwYXRjaE1lc3NhZ2VUb1NpZGVDYXJCdG4uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXG5cdGRpc3BhdGNoTWVzc2FnZVRvU2lkZUNhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuRGlzcGF0Y2hNZXNzYWdlVG9TaWRlQ2FyQXBwXCIpO1xuXHRkaXNwYXRjaE1lc3NhZ2VUb1NpZGVDYXJCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwYXRjaE1lc3NhZ2VUb1NpZGVDYXJBcHApO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIFBsYXRmb3JtLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplUGxhdGZvcm0oKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgZmluLlBsYXRmb3JtLmluaXQoeyB9KTtcblx0XHRsb2dnaW5nQWRkRW50cnkoXCJQbGF0Zm9ybSBpbml0aWFsaXplZC5cIik7XG5cdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRsb2dnaW5nQWRkRW50cnkoYFRoZXJlIHdhcyBhbiBlcnJvciB3aGlsZSB0cnlpbmcgdG8gaW5pdGlhbGl6ZSB5b3VyIHBsYXRmb3JtLiBFcnJvcjogJHtnZXRFcnJvck1lc3NhZ2UoZXJyb3IpfWApO1x0XHRcblx0fVxufVxuXG4vKipcbiAqIFJldHVybiBhIG1lc3NhZ2UgZnJvbSBhbiBlcnJvci5cbiAqIEBwYXJhbSBlcnJvciBUaGUgZXJyb3IgdG8gaW5zcGVjdCBhbmQgcmV0cmlldmUgdGhlIG1lc3NhZ2UgZnJvbVxuICogQHJldHVybnMgVGhlIGVycm9yIG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yOiB1bmtub3duKTogc3RyaW5nIHtcblx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiBlcnJvci5tZXNzYWdlXG5cdHJldHVybiBTdHJpbmcoZXJyb3IpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCBhc3NpZ24gYSBjaGFubmVsIGNsaWVudFxuICogQHJldHVybnMgY2hhbm5lbCBjbGllbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbENsaWVudCgpOiBQcm9taXNlPENoYW5uZWxDbGllbnQ+IHtcblx0Y29uc3QgY2hhbm5lbE5hbWUgPSBcInNpZGVjYXItYXBwXCI7XG4gICAgY29uc3QgY2hhbm5lbENsaWVudCA9IGF3YWl0IGZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLkNoYW5uZWwuY29ubmVjdChjaGFubmVsTmFtZSwgeyBwYXlsb2FkOiBcIlBheWxvYWQgZnJvbSBwbGF0Zm9ybVwifSk7XG5cdGxvZ2dpbmdBZGRFbnRyeShgQ29ubmVjdGlvbiBUbyBTaWRlQ2FyIEFwcCBvbiBjaGFubmVsOiAke2NoYW5uZWxOYW1lfSBlc3RhYmxpc2hlZC5gKTtcblx0cmV0dXJuIGNoYW5uZWxDbGllbnQ7XG59XG5cbi8qKlxuICogRmV0Y2ggdGhlIFNpZGVDYXIgQXBwLCBMYXVuY2ggaXQgYW5kIENvbm5lY3QgdG8gaXQgdmlhIENoYW5uZWxzLlxuICovXG5hc3luYyBmdW5jdGlvbiBzZXR1cFNpZGVDYXJBcHAoKSB7XG5cdGF3YWl0IGZldGNoU2lkZUNhckFwcElmTmVlZGVkKCk7XG5cdGF3YWl0IGxhdW5jaFNpZGVDYXJBcHAoKTtcblx0YXdhaXQgY3JlYXRlQ2hhbm5lbENsaWVudEFuZFJlZ2lzdGVyTGlzdGVuZXJzKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY29ubmVjdGlvbiB0byB0aGUgU2lkZUNhciBhcHBsaWNhdGlvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbENsaWVudEFuZFJlZ2lzdGVyTGlzdGVuZXJzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjaGFubmVsQ2xpZW50ID0gYXdhaXQgY3JlYXRlQ2hhbm5lbENsaWVudCgpO1xuXG5cdGlmKGNoYW5uZWxDbGllbnQgIT09IG51bGwpIHtcblx0XHRjaGFubmVsQ2xpZW50Lm9uRGlzY29ubmVjdGlvbigoaWRlbnRpdHkpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwib25EaXNjb25uZWN0aW9uIGlkZW50aXR5OiBcIiwgaWRlbnRpdHkpO1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBvbkRpc2Nvbm5lY3Rpb24gaWRlbnRpdHk6ICR7SlNPTi5zdHJpbmdpZnkoaWRlbnRpdHkpfWApO1xuXHRcdFx0aWYoY29ubmVjdFRvU2lkZUNhckJ0biAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25uZWN0VG9TaWRlQ2FyQnRuLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZihkaXNwYXRjaE1lc3NhZ2VUb1NpZGVDYXJCdG4gIT09IG51bGwpIHtcblx0XHRcdFx0ZGlzcGF0Y2hNZXNzYWdlVG9TaWRlQ2FyQnRuLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIkNsaWVudCBoYXMgYmVlbiBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgU2lkZUNhciBBcHBcIik7XG5cdFx0fSk7XG5cblx0XHQvLyByZWNlaXZlZCByZXF1ZXN0IG92ZXIgY2hhbm5lbCB0byBkaXNwbGF5IGEgbWVzc2FnZVxuXHRcdGNoYW5uZWxDbGllbnQucmVnaXN0ZXIoJ3NpZGVjYXItYXBwLWNsaWVudC1zdWJzY3JpYmVyJywgYXN5bmMgKHBheWxvYWQpID0+IHtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgTWVzc2FnZSByZWNlaXZlZCBmcm9tIFNpZGVDYXIgQXBwOiAke3BheWxvYWR9YCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqIFxuICogU2VuZCBhbiBleGFtcGxlIG1lc3NhZ2UgdG8gdGhlIFNpZGVDYXIgYXBwbGljYXRpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGRpc3BhdGNoTWVzc2FnZVRvU2lkZUNhckFwcCgpIHtcblx0dHJ5IHtcblx0XHRpZihjaGFubmVsQ2xpZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIlNlbmRpbmcgTWVzc2FnZSB0byBTaWRlQ2FyIEFwcC5cIik7XG5cdFx0XHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBjaGFubmVsQ2xpZW50LmRpc3BhdGNoKFwic2lkZWNhci1hcHAtZWNob1wiLCBcIk1lc3NhZ2UgZnJvbSBwbGF0Zm9ybSB0byBzaWRlY2FyXCIpO1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBNZXNzYWdlIHNlbnQgdG8gU2lkZUNhciBBcHAgYW5kIHJlc3BvbnNlIHJlY2VpdmVkOiAke3Jlc3BvbnNlfS5gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiVW5hYmxlIHRvIHNlbmRpbmcgbWVzc2FnZSB0byBTaWRlQ2FyIEFwcCBhcyB0aGUgcGxhdGZvcm0gaXMgbm90IGN1cnJlbnRseSBjb25uZWN0ZWQgdG8gaXQuXCIpO1xuXHRcdH1cdFx0XHRcblx0fSBjYXRjaCAoZXJyb3IpIHtcdFx0XG5cdFx0Y29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciB0cnlpbmcgdG8gc2VuZCBhIG1lc3NhZ2UgdG8gdGhlIFNpZGVDYXIgQXBwXCIsIGVycm9yKTtcblx0XHRsb2dnaW5nQWRkRW50cnkoYEVycm9yIHNlbmRpbmcgbWVzc2FnZSB0byBTaWRlQ2FyIEFwcDogIFxcblxcblxcdCR7Z2V0RXJyb3JNZXNzYWdlKGVycm9yKX1gKTtcblx0fVx0XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGVudHJ5IGluIHRvIHRoZSBsb2dnaW5nIHdpbmRvdy5cbiAqIEBwYXJhbSBlbnRyeSBUaGUgZW50cnkgdG8gYWRkLlxuICovXG5mdW5jdGlvbiBsb2dnaW5nQWRkRW50cnkoZW50cnk6IHN0cmluZyk6IHZvaWQge1xuXHRpZiAobG9nZ2luZ0VsZW1lbnQpIHtcblx0XHRsb2dnaW5nRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2VudHJ5fVxcblxcbiR7bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnR9YDtcblx0fVxufVxuXG4vKipcbiAqIEZldGNoZXMgdGhlIFNpZGVDYXIgQXNzZXQgaWYgaXQgaGFzbid0IGJlZW4gc3BlY2lmaWVkIGluIHRoZSBtYW5pZmVzdC5cbiAqIFdlIGFyZSBmb3JjaW5nIHRoZSBkb3dubG9hZCBlYWNoIHRpbWUgaXQgaXMgcnVuIGJ1dCB5b3UgY291bGQgZmV0Y2ggdGhlIGFzc2V0IFxuICogaW5mbyBmcm9tIGEgc2VydmljZSBhbmQgdGhlIHZlcnNpb24gbnVtYmVyIHdvdWxkIGluZGljYXRlIHdoZXRoZXIgb3Igbm90IGl0IHdhcyBuZWVkZWQuIFxuICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaFNpZGVDYXJBcHBJZk5lZWRlZCgpIHtcblx0Y29uc3QgYXBwID0gYXdhaXQgZmluLkFwcGxpY2F0aW9uLmdldEN1cnJlbnQoKTtcblx0Y29uc3QgbWFuaWZlc3Q6IE9wZW5GaW4uTWFuaWZlc3QgPSBhd2FpdCBhcHAuZ2V0TWFuaWZlc3QoKTtcblx0bG9nZ2luZ0FkZEVudHJ5KFwiQ2hlY2tpbmcgdG8gc2VlIGlmIFNpZGVDYXIgQXBwIGlzIGRlZmluZWQgYXMgYW4gQXBwQXNzZXQgaW4gdGhlIG1hbmlmZXN0LlwiKTtcblx0aWYoIUFycmF5LmlzQXJyYXkobWFuaWZlc3QuYXBwQXNzZXRzKSl7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFwiTm8gQXBwIEFzc2V0cyBEZWZpbmVkLiBEb2luZyBhIGRpcmVjdCBkb3dubG9hZCBvZiB0aGUgU2lkZUNhciBBcHAuXCIpO1xuXHRcdGF3YWl0IGZldGNoU2lkZUNhckFwcCgpO1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBhcHBBc3NldHM6IHsgYWxpYXM6IHN0cmluZyB9W10gPSBtYW5pZmVzdC5hcHBBc3NldHM7XG5cdGlmKGFwcEFzc2V0cy5zb21lKGVudHJ5ID0+IGVudHJ5LmFsaWFzID09PSBTSURFQ0FSX0FQUF9BTElBUykpIHtcblx0XHRsb2dnaW5nQWRkRW50cnkoXCJTaWRlQ2FyIEFwcCBkZWZpbmVkIGluIE1hbmlmZXN0LiBObyBuZWVkIHRvIGZldGNoIHRocm91Z2ggY29kZS5cIik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGF3YWl0IGZldGNoU2lkZUNhckFwcCgpO1xufVxuXG4vKiogXG4qIFNob3dzIGRvd25sb2FkaW5nIHRoZSBTaWRlQ2FyIEFwcCBhcyBhbiBhcHAgYXNzZXQuIFxuKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoU2lkZUNhckFwcCgpIHtcblx0dHJ5IHtcblx0XHRjb25zdCBhcHBBc3NldCA9IHtcblx0XHRcdHNyYzogU0lERUNBUl9BUFBfU1JDLFxuXHRcdFx0YWxpYXM6IFNJREVDQVJfQVBQX0FMSUFTLFxuXHRcdFx0dmVyc2lvbjogXCIxLjAuMFwiLFxuXHRcdFx0dGFyZ2V0OiBTSURFQ0FSX0FQUF9UQVJHRVQsXG5cdFx0XHRmb3JjZTogdHJ1ZVxuXHRcdH07XG5cdFxuXHRcdGxvZ2dpbmdBZGRFbnRyeShcIkZldGNoaW5nIFNpZGVDYXIgQXBwIHRocm91Z2ggZmluLlN5c3RlbS5kb3dubG9hZEFzc2V0LlwiKTtcblx0XHRhd2FpdCBmaW4uU3lzdGVtLmRvd25sb2FkQXNzZXQoYXBwQXNzZXQsIChwcm9ncmVzcyA9PiB7XG5cdFx0XHRjb25zdCBkb3dubG9hZGVkUGVyY2VudCA9IE1hdGguZmxvb3IoKHByb2dyZXNzLmRvd25sb2FkZWRCeXRlcyAvIHByb2dyZXNzLnRvdGFsQnl0ZXMpICogMTAwKTtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgRG93bmxvYWRlZCAke2Rvd25sb2FkZWRQZXJjZW50fSUgb2YgU2lkZUNhciBBcHBgKTtcblx0XHR9KSk7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFwiU2lkZUNhciBBcHAgaXMgZG93bmxvYWRlZC5cIik7XG5cdH0gY2F0Y2goZXJyKSB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBUaGVyZSBoYXMgYmVlbiBhbiBlcnJvciB3aGVuIHRyeWluZyB0byBmZXRjaCB0aGUgU2lkZUNhciBBcHA6ICR7Z2V0RXJyb3JNZXNzYWdlKGVycil9YCk7XG5cdH1cbn1cblxuLyoqXG4gKiBMYXVuY2ggU2lkZUNhciBBcHAuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxhdW5jaFNpZGVDYXJBcHAoKSB7XG5cdGNvbnN0IHNpZGVDYXJBcHA6IE9wZW5GaW4uRXh0ZXJuYWxQcm9jZXNzUmVxdWVzdFR5cGUgPSB7XG5cdFx0YWxpYXM6IFNJREVDQVJfQVBQX0FMSUFTLFxuXHRcdGxpZmV0aW1lOiBcImFwcGxpY2F0aW9uXCIsXG5cdFx0bGlzdGVuZXI6IChyZXN1bHQpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdCk7XG5cdFx0XHRpZiAocmVzdWx0LmV4aXRDb2RlID09PSAxKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgZXhpdGVkICR7U0lERUNBUl9BUFBfVEFSR0VUfWApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0dHJ5IHtcblx0XHRsb2dnaW5nQWRkRW50cnkoXCJMYXVuY2hpbmcgU2lkZUNhciBBcHAuXCIpO1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBmaW4uU3lzdGVtLmxhdW5jaEV4dGVybmFsUHJvY2VzcyhzaWRlQ2FyQXBwKTtcblx0XHRjb25zb2xlLmxvZyhcInN1Y2Nlc3NmdWxseSBsYXVuY2hlZCBTaWRlQ2FyIEFwcDpcIiwgZGF0YSk7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFwiU2lkZUNhciBBcHAgTGF1bmNoZWQuXCIpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBUaGVyZSB3YXMgYW4gZXJyb3IgbGF1bmNoaW5nIHRoZSBTaWRlQ2FyIEFwcDogJHtnZXRFcnJvck1lc3NhZ2UoZXJyKX1gKTtcblx0fVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==