import "./dilbilgisi/content-connect.js";
import { autoClean, checkClean, fixSite } from "./JSdependencies.js";

// Save default settings
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    chrome.storage.local.set({
      defReplaceMode: "suggest",
      defSiteFixMode: "off"
    });
  }
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  if (changeInfo.status !== 'complete') { return }

  const modes = await pickModes();

  const toBeInjectedJS = new Set();

  if (modes.defReplaceMode === "suggest") { // check-clean
    // add dependencies to js files list
    checkClean.forEach(item =>
      toBeInjectedJS.add(item)
    )

    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: [ "site-css/style.css", ],
    }).catch(()=>{});

  } else { // auto-clean

    autoClean.forEach(item =>
      toBeInjectedJS.add(item)
    )
  }
  
  if (modes.defSiteFixMode === "on") {

    fixSite.forEach(item =>
      toBeInjectedJS.add(item)
    )
  }

  addJS(toBeInjectedJS, tabId);
});

// helpers
async function pickModes() {
  const modes={};
  modes.defReplaceMode = 
  (await chrome.storage.local.get("defReplaceMode"))
  .defReplaceMode;

  modes.defSiteFixMode = 
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