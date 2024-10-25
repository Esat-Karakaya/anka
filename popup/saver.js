const defReplaceMode = document.getElementById("def-replace-mode");

chrome.storage.local.get("defReplaceMode").then((value)=>{
    defReplaceMode.checked = value.defReplaceMode === "auto";
});

defReplaceMode.addEventListener("change", async (event)=>{
    const newMode = event.target.checked ? "auto" : "suggest";

    chrome.storage.local.set({
        defReplaceMode: newMode,
    });
})