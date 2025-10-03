import { ChannelAction, ChannelProvider } from "@openfin/core/src/OpenFin";
import {
	ActionBodyClickType,
	VERSION,
	addEventListener as addNotificationEventListener,
	create,
	deregisterPlatform,
	getNotificationsCount,
	hide as hideNotificationCenter,
	provider,
	registerPlatform,
	show as showNotificationCenter,
	update,
	type NotificationOptions,
	type TemplateMarkdown,
	type UpdatableNotificationOptions,
	IndicatorColor
} from "@openfin/workspace/notifications";

import fs from 'fs';

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
let channel : ChannelProvider;

/**
 * Wait for the DOM to have been loaded before we connect the UI elements and listeners.
 */
window.addEventListener("DOMContentLoaded", async () => {
	await initializeDom();
	await initializeListeners();
	await initializePlatform();
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
	
	const notificationsCount = await getNotificationsCount();
	loggingAddEntry(`Number of notifications in the Notification Center is ${notificationsCount}`);

	clearLogsElement = document.querySelector("#btnClear");
	clearLogsElement?.addEventListener("click", () => loggingElement ? loggingElement.textContent = "" : null);
}


async function initializePlatform(): Promise<void> {
	await registerPlatform({
		id: PLATFORM_ID,
		icon: PLATFORM_ICON,
		title: PLATFORM_TITLE
	});

	loggingAddEntry("Platform registered");
	activePlatform = PLATFORM_ID;
}
/**
 * Initialize the listeners for the events from the notification center.
 */
async function initializeListeners(): Promise<void> {
	// Listen for new notifications being created
	addNotificationEventListener("notification-created", (event) => {
		loggingAddEntry(`Created: ${event.notification.id}`);
	});

	addNotificationEventListener("notification-closed", (event) => {
		loggingAddEntry(`Closed: ${event.notification.id}`);

		if (updatableNotifications[event.notification.id]) {
			delete updatableNotifications[event.notification.id];
			if (Object.keys(updatableNotifications).length === 0) {
				window.clearInterval(updatableNotificationTimer);
				updatableNotificationTimer = undefined;
			}
		}
	});

	addNotificationEventListener("notification-action", (event) => {
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

	addNotificationEventListener("notification-toast-dismissed", (event) => {
		loggingAddEntry(`Toast Dismissed: ${event.notification.id}`);
	});

	// Event listener that tracks when input form notification is submitted
	addNotificationEventListener("notification-form-submitted", (event) => {
		loggingAddEntry(`\tData: ${event?.form ? JSON.stringify(event.form) : "None"}`);
		loggingAddEntry(`Form submitted: ${event.notification.id}`);
		console.log(event);
		// Send data back to the client
		channel.publish('form-notification-response', JSON.stringify(event?.form));
	});

	addNotificationEventListener("notifications-count-changed", (event) => {
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

async function createChannel(): Promise<ChannelProvider> {
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
function addConnectionChangedEventListener(callback: (status: provider.ProviderStatus) => void): void {
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