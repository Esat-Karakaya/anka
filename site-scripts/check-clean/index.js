// elements with buttons added
const spotteds = new Set([]);

document.addEventListener("click", async () => {
    const focused = document.activeElement;
    if (
        (
            !(focused.tagName==="DIV") ||
            !(focused.getAttribute("contenteditable")==="true")
        ) &&
        !(focused.tagName==="TEXTAREA")
    ) { return; } // clicked tag is not writable
    else if (spotteds.has(focused)){ return; } // already added
    else {
        spotteds.add(focused);
        addGui(focused, spotteds.size);
    }
})

function addGui(element, id) { // mutations
    const selectedForeigns = new Set([]);

    const gui = newGui(async ()=>{ // When popover is visible
        const { rootsToFix } = textForeignInfo(element.textContent);

        const popover = document.getElementById(`suggest${id}`);
        
        selectedForeigns.clear();
        listAlternatives({
            replacements: rootsToFix,
            container: popover.querySelector(".foreign-suggest"),
            badFoundMsg: "Bu kelimeleri alternatifleriyle değiştirelim mi❓",
            noBadMsg: "Yabancı kelime bulunmadı🎉",
            selectedsSet: selectedForeigns,
        });
    }, id, async ()=>{ // when apply button is clicked
        const { rootOriginals } = textForeignInfo(element.textContent);

        localizeText(element, selectedForeigns, rootOriginals);
    });
    element.before(gui);
}