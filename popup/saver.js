const defReplaceMode = document.getElementById("def-replace-mode");
const defSiteFixMode = document.getElementById("def-site_fix-mode");

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