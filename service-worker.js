// Save default settings
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    chrome.storage.local.set({
      defReplaceMode: "suggest",
    });
  }
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  if (changeInfo.status !== 'complete') { return }

  const modes = await pickModes();

  if (modes.defReplaceMode === "suggest") {

    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: [
        "site-scripts/check-clean/check-gui.js",
        "site-scripts/check-clean/replacer.js",

        // utils
        "site-scripts/utils/dict.js",
        "site-scripts/utils/dilbilgisi.js",
        "site-scripts/utils/arrayify.js",
        "site-scripts/utils/text-info.js",

        // inject last
        "site-scripts/check-clean/index.js",
      ],
    }).catch(()=>{});

    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: [
        "site-css/style.css",
      ],
    }).catch(()=>{});

  } else {

    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["site-scripts/auto-clean/index.js"],
    }).catch(()=>{});

  }
  
});

async function pickModes() {
  const modes={};
  modes.defReplaceMode = (await chrome.storage.local.get("defReplaceMode")).defReplaceMode;

  return modes
}