import { pickModes } from "../service-worker.js";

const defReplaceMode = document.getElementById("def-replace-mode");
const defSiteFixMode = document.getElementById("def-site_fix-mode");
const siteReplaceMode = document.getElementById("site-replace-mode");
const siteSiteFixMode = document.getElementById("site-site_fix-mode");

// set gui according to storage
chrome.storage.local.get("defReplaceMode").then((value)=>{
	defReplaceMode.checked = value.defReplaceMode === "auto";
});
chrome.storage.local.get("defSiteFixMode").then((value)=>{
	defSiteFixMode.checked = value.defSiteFixMode === "off";
});

// set storage according to gui
defReplaceMode.addEventListener("change", (event)=>{
	const newMode = event.target.checked ? "auto" : "suggest";

	chrome.storage.local
	.set({ defReplaceMode: newMode, });
})
defSiteFixMode.addEventListener("change", (event)=>{
	const newMode = event.target.checked ? "off" : "on";

	chrome.storage.local
	.set({ defSiteFixMode: newMode, });
})

// SITE SETTINGS
let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
console.log(tab)
const hostname = (new URL(tab?.url)).hostname;

const siteSettingsH2 = document.getElementById("siteSettingsH2");
siteSettingsH2.innerText = (hostname? hostname:"Site") + " Ayarları";

const modes = await pickModes();

siteReplaceMode.checked = modes.replaceMode === "auto";
siteSiteFixMode.checked = modes.siteFixMode === "off";

// Construct raw data

console.log(modes);

modes.replaceMode = String(Number(modes.replaceMode === "auto"));
modes.siteFixMode = String(Number(modes.siteFixMode === "off"));

const rawSiteSettings = [modes.replaceMode, modes.siteFixMode];

siteReplaceMode.addEventListener("change", (event) => {
	const newMode = String(Number(event.target.checked));

	const storage = {};
	storage[hostname] = 
	newMode + rawSiteSettings[1];

	chrome.storage.local
	.set(storage);
})

siteSiteFixMode.addEventListener("change", (event) => {
	const newMode = String(Number(event.target.checked));

	const storage = {};
	storage[hostname] = 
	rawSiteSettings[0] + newMode;

	chrome.storage.local
	.set(storage);
})