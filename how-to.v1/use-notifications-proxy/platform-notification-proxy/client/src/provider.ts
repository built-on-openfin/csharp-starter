/* eslint-disable @typescript-eslint/await-thenable */
import { init } from "@openfin/workspace-platform";
import type OpenFin from "@openfin/core";
import {
	VERSION, 
	register, 
	getNotificationsCount, 
	create, 
	addEventListener,
	TemplateMarkdown,
	NotificationOptions,
	provider
} from "@openfin/workspace/notifications";

const PLATFORM_ID = "nodejs-notifications";
const PLATFORM_ICON = "http://localhost:8080/images/icon-dot.png";
const PLATFORM_TITLE = "Notifications Proxy";

const NOTIFICATION_SOUND_URL = "http://localhost:8080/assets/notification.mp3";

// Keep track of notifications we are updating
const updatableNotifications: { [id: string]: TemplateMarkdown & { customData: { count: number } } } = {};
let updatableNotificationTimer: number | undefined;

let loggingElement: HTMLElement | null;
let clearLogsElement: HTMLElement | null;

let activePlatform: string | undefined;
let connected: boolean = false;
let connectedVersion: string | null;
let statusIntervalId: number | undefined;
let lastConnectionStatus: boolean | undefined;
let channel: OpenFin.ChannelProvider | null = null;

/**
 * Wait for the DOM to have been loaded before we connect the UI elements and listeners.
 */
window.addEventListener("DOMContentLoaded", async () => {
	await initializeDom();
	await initializePlatform();

	await initializeNotifications();
	await createChannelAndRegisterListeners();
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

	loggingAddEntry(`Library Version: ${VERSION}`);
	loggingContainer.style.display = "flex";
	
	clearLogsElement = document.querySelector("#btnClear");
	clearLogsElement?.addEventListener("click", () => loggingElement ? loggingElement.textContent = "" : null);
}


async function initializePlatform(): Promise<void> {
	console.log("Initializing workspace platform");
	await init({
		browser: {
			defaultWindowOptions: {
				icon: PLATFORM_ICON,
				workspacePlatform: {
					pages: [],
					favicon: PLATFORM_ICON
				}
			}
		},
		theme: [
			{
				label: "Default",
				default: "dark",
				palettes: {
					dark: {
						brandPrimary: "#0A76D3",
						brandSecondary: "#383A40",
						backgroundPrimary: "#1E1F23"
					},
					light: {
						brandPrimary: "#0A76D3",
						brandSecondary: "#1E1F23",
						backgroundPrimary: "#FAFBFE",
						// Demonstrate changing the link color for notifications
						linkDefault: "#FF0000",
						linkHover: "#00FF00"
					}
				},
				notificationIndicatorColors: {
					// This custom indicator color will be used in the Notification with Custom Indicator
					"custom-indicator": {
						dark: {
							background: "#FF0000",
							foreground: "#FFFFDD"
						},
						light: {
							background: "#FF0000",
							foreground: "#FFFFDD"
						}
					}
				}
			}
		]
	});
	loggingAddEntry("Platform registered");
}

/**
 * Initialize the notifications.
 */
async function initializeNotifications(): Promise<void> {
	await register({
		notificationsPlatformOptions: {
			id: PLATFORM_ID,
			icon: PLATFORM_ICON,
			title: PLATFORM_TITLE
		}
	});

	let notificationsCount = await getNotificationsCount()
	loggingAddEntry(`Number of notifications in the Notification Center is ${notificationsCount}`);

	await initializeListeners();
}
/**
 * Initialize the listeners for the events from the notification center.
 */
async function initializeListeners(): Promise<void> {
	// Listen for new notifications being created
	addEventListener("notification-created", async (event) => {
		loggingAddEntry(`Created: ${event.notification.id}`);
	});

	addEventListener("notification-closed", async (event) => {
		loggingAddEntry(`Closed: ${event.notification.id}`);

		if (updatableNotifications[event.notification.id]) {
			delete updatableNotifications[event.notification.id];
			if (Object.keys(updatableNotifications).length === 0) {
				window.clearInterval(updatableNotificationTimer);
				updatableNotificationTimer = undefined;
			}
		}
	});

	addEventListener("notification-action", async (event) => {
		if (event?.result?.BODY_CLICK === "dismiss_event") {
			if (event.notification?.customData?.action) {
				loggingAddEntry(
					`\tData: ${
						event?.notification?.customData ? JSON.stringify(event.notification.customData) : "None"
					}`
				);
			} else {
				loggingAddEntry("\tNo action");
			}
			loggingAddEntry("\tBody click dismiss");
		} else {
			loggingAddEntry(
				`\tData: ${event?.result?.customData ? JSON.stringify(event.result.customData) : "None"}`
			);
			loggingAddEntry(`\tTask: ${event?.result?.task ?? "None"}`);
			loggingAddEntry(`Action: ${event.notification.id}`);
		}

		console.log(event);
	});

	addEventListener("notification-toast-dismissed", async (event) => {
		loggingAddEntry(`Toast Dismissed: ${event.notification.id}`);
	});

	// Event listener that tracks when input form notification is submitted
	addEventListener("notification-form-submitted", async (event) => {
		loggingAddEntry(`\tData: ${event?.form ? JSON.stringify(event.form) : "None"}`);
		loggingAddEntry(`Form submitted: ${event.notification.id}`);
		console.log(event);
		// Send data back to the client
		//channel.publish('form-notification-response', JSON.stringify(event?.form));
	});

	addEventListener("notifications-count-changed", async(event) => {
		loggingAddEntry(`Number of notifications in the Notification Center is ${event.count}`);
	});

	addConnectionChangedEventListener((status) => {
		if (status.connected !== connected) {
			connected = status.connected;
			connectedVersion = status.version;
			updateConnectedState();
		}
	});
}

async function createChannelAndRegisterListeners(): Promise<void> {
	channel = await createChannel();

	if(channel !== null) {
		channel.onConnection((identity, payload) => {
			console.log('onConnection identity: ', JSON.stringify(identity));
			console.log('onConnection payload: ', JSON.stringify(payload));
			loggingAddEntry('onConnection identity: ' + JSON.stringify(identity));
		});
		channel.onDisconnection((identity) => {
			console.log('onDisconnection identity: ', JSON.stringify(identity));
			loggingAddEntry('onDisconnection identity: ' + JSON.stringify(identity));
		});

		// received request over channel to display simple notification
		channel.register('send-simple-notification', async (payload) => {
			if(payload) {
				createNotification(payload as NotificationOptions);			
			} else {
				loggingAddEntry(`Error : No payload received with Notification request\n\n`);
			}			
		});

		// received request over channel to display input form notification
		channel.register('show-form-notification', async(payload) => {
			if(payload) {	
				createNotification(payload as NotificationOptions);		
			} else {
				if(loggingElement)
				loggingAddEntry(`Error : No payload received with Notification request`);
			}
		});
		
		channel.register('throwError', (err) => {
			loggingAddEntry(`Error in channelProvider - ${err}`);
			throw new Error(`Error in channelProvider - ${err}`);
		});
	}
}

async function createNotification(payload: NotificationOptions) {
	try {
		loggingAddEntry(`Received notification payload from client: \n\n\t${JSON.stringify(payload, null, 2)}`);
		const notificationOptions = payload as NotificationOptions;
		await create(notificationOptions);				
	} catch (error) {		
		console.log(error);
		loggingAddEntry(`Error parsing payload:  \n\n\t${error}`);
	}	
}

async function createChannel(): Promise<OpenFin.ChannelProvider> {
	const channelName = 'notification-channel';
    const provider = await fin.InterApplicationBus.Channel.create(channelName);
	loggingAddEntry(`New channel provider created: ${channelName}`);
	return provider;
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
 * Update the connected state on the view.
 */
function updateConnectedState(): void {
	loggingAddEntry(`Is Connected: ${connected}`);
	if (connected) {
		loggingAddEntry(`Connected Version: ${connectedVersion}`);
	}

	const buttons = document.querySelectorAll("button");
	for (const button of buttons) {
		button.disabled = !connected;
	}
}

/**
 * Update the notification count on the view.
 * @param count The new count to display.
 */
function showNotificationCount(count: number): void {
	const btnNotificationsCenterShow = document.querySelector("#btnNotificationsCenterShow");
	if (btnNotificationsCenterShow) {
		btnNotificationsCenterShow.textContent = `Show [${count}]`;
	}
}

async function showNotification(payload: NotificationOptions): Promise<void> {
	const notification: NotificationOptions = payload;
	await create(notification);
}

/**
 * Add a listener which checks for the connection changed event.
 * @param callback The callback to call when the connection state changes.
 */
function addConnectionChangedEventListener(
	callback: (status: provider.ProviderStatus) => void
): void {
	if (statusIntervalId === undefined) {
		statusIntervalId = window.setInterval(async () => {
			const status = await provider.getStatus();
			if (status.connected !== lastConnectionStatus) {
				lastConnectionStatus = status.connected;
				callback(status);
			}
		}, 1000);
	}
}