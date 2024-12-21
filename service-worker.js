import "./extras/content-connect.js";
import { autoClean, checkClean, fixSite } from "./extras/JSdependencies.js";

// Save default settings
chrome.runtime.onInstalled.addListener(({ reason }) => {
	if (reason === 'install') {
	chrome.storage.local.set({
		defReplaceMode: "suggest",
		defSiteFixMode: "on"
	});
	}
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
	if (changeInfo.status !== 'complete') { return }

	const modes = await pickModes();

	const toBeInjectedJS = new Set();

	if (modes.replaceMode === "suggest") { // check-clean
	// add dependencies to js files list
	checkClean.forEach(item =>
		toBeInjectedJS.add(item)
	)

	chrome.scripting.insertCSS({
		target: { tabId },
		files: [ "site-css/style.css", ],
	}).catch(()=>{});

	} else { // auto-clean
		autoClean.forEach(item =>
			toBeInjectedJS.add(item)
		)
	}
	
	if (modes.siteFixMode === "on") {
		fixSite.forEach(item =>
			toBeInjectedJS.add(item)
		)
	}

	addJS(toBeInjectedJS, tabId);
});

// helpers
export async function pickModes() {
	let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
	const hostname = (new URL(tab?.url)).hostname;
	
	const modes={};

	const hostSettings = (await chrome.storage.local.get(hostname))[hostname];

	if (hostSettings) {
		modes.replaceMode = 
		hostSettings[0] === "1"?
			"auto":
			"suggest";

		modes.siteFixMode = 
		hostSettings[1] === "1"?
			"off":
			"on";

		return modes;
	}

	modes.replaceMode = 
	(await chrome.storage.local.get("defReplaceMode"))
	.defReplaceMode;

	modes.siteFixMode = 
	(await chrome.storage.local.get("defSiteFixMode"))
	.defSiteFixMode;

	return modes
}

function addJS(JSset, tabId) {

	const arrayifed = [...JSset];

	chrome.scripting.executeScript({
	target: { tabId },
	files: arrayifed,
	})
	.catch(()=>{});
}