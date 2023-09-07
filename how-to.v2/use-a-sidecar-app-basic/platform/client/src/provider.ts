import OpenFin from "@openfin/core";
import type { ChannelClient } from "@openfin/core/src/OpenFin";

let loggingElement: HTMLElement | null;
let clearLogsBtn: HTMLButtonElement | null;
let connectToSideCarBtn: HTMLButtonElement | null;
let dispatchMessageToSideCarBtn: HTMLButtonElement | null;
let channelClient : ChannelClient;

const SIDECAR_APP_ALIAS = "sidecar-app";
const SIDECAR_APP_TARGET = "SideCar.App.exe";
const SIDECAR_APP_SRC = `${ location.origin }/assets/sidecar-app.zip`; 
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
async function initializeDom(): Promise<void> {
	loggingElement = document.querySelector("#logging");
	const loggingContainer: HTMLDivElement | null = document.querySelector("#logging-container");

	if (!loggingElement || !loggingContainer) {
		return;
	}

	loggingContainer.style.display = "flex";	

	clearLogsBtn = document.querySelector("#btnClear");
	clearLogsBtn?.addEventListener("click", () => loggingElement ? loggingElement.textContent = "" : null);

	connectToSideCarBtn = document.querySelector("#btnConnectToSideCarApp");
	connectToSideCarBtn?.addEventListener("click", async ()=> {
		await setupSideCarApp();
		if(connectToSideCarBtn !== null) {
			connectToSideCarBtn.disabled = true;
		}
		if(dispatchMessageToSideCarBtn !== null) {
			dispatchMessageToSideCarBtn.disabled = false;
		}
	});

	dispatchMessageToSideCarBtn = document.querySelector("#btnDispatchMessageToSideCarApp");
	dispatchMessageToSideCarBtn?.addEventListener("click", dispatchMessageToSideCarApp);
}

/**
 * Initialize the Platform.
 */
async function initializePlatform(): Promise<void> {
	try {
		await fin.Platform.init({ });
		loggingAddEntry("Platform initialized.");
	} catch(error) {
		loggingAddEntry(`There was an error while trying to initialize your platform. Error: ${getErrorMessage(error)}`);		
	}
}

/**
 * Return a message from an error.
 * @param error The error to inspect and retrieve the message from
 * @returns The error message
 */
function getErrorMessage(error: unknown): string {
	if (error instanceof Error) return error.message
	return String(error)
}

/**
 * Create and assign a channel client
 * @returns channel client
 */
async function createChannelClient(): Promise<ChannelClient> {
	const channelName = "sidecar-app";
    const channelClient = await fin.InterApplicationBus.Channel.connect(channelName, { payload: "Payload from platform"});
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
async function createChannelClientAndRegisterListeners(): Promise<void> {
	channelClient = await createChannelClient();

	if(channelClient !== null) {
		channelClient.onDisconnection((identity) => {
			console.log("onDisconnection identity: ", identity);
			loggingAddEntry(`onDisconnection identity: ${JSON.stringify(identity)}`);
			if(connectToSideCarBtn !== null) {
				connectToSideCarBtn.disabled = false;
			}
			if(dispatchMessageToSideCarBtn !== null) {
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
		if(channelClient !== undefined) {
			loggingAddEntry("Sending Message to SideCar App.");
			let response = await channelClient.dispatch("sidecar-app-echo", "Message from platform to sidecar");
			loggingAddEntry(`Message sent to SideCar App and response received: ${response}.`);
		} else {
			loggingAddEntry("Unable to sending message to SideCar App as the platform is not currently connected to it.");
		}			
	} catch (error) {		
		console.error("There was an error trying to send a message to the SideCar App", error);
		loggingAddEntry(`Error sending message to SideCar App:  \n\n\t${getErrorMessage(error)}`);
	}	
}

/**
 * Add a new entry in to the logging window.
 * @param entry The entry to add.
 */
function loggingAddEntry(entry: string): void {
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
	const manifest: OpenFin.Manifest = await app.getManifest();
	loggingAddEntry("Checking to see if SideCar App is defined as an AppAsset in the manifest.");
	if(!Array.isArray(manifest.appAssets)){
		loggingAddEntry("No App Assets Defined. Doing a direct download of the SideCar App.");
		await fetchSideCarApp();
		return;
	}
	const appAssets: { alias: string }[] = manifest.appAssets;
	if(appAssets.some(entry => entry.alias === SIDECAR_APP_ALIAS)) {
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
	} catch(err) {
		loggingAddEntry(`There has been an error when trying to fetch the SideCar App: ${getErrorMessage(err)}`);
	}
}

/**
 * Launch SideCar App.
 */
async function launchSideCarApp() {
	const sideCarApp: OpenFin.ExternalProcessRequestType = {
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
	} catch (err) {
		console.error(err);
		loggingAddEntry(`There was an error launching the SideCar App: ${getErrorMessage(err)}`);
	}
}