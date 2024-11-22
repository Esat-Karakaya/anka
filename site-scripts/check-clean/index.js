// elements with buttons added
const spotteds = new Set([]);

document.addEventListener("click", async () => {
    const focused = document.activeElement;

    /* add button to selected writables */
    if ( // clicked tag is not writable
        (
            !(focused.tagName==="DIV") ||
            !(focused.getAttribute("contenteditable")==="true")
        ) &&
        !(focused.tagName==="TEXTAREA")
    ) {
        return; 
    }

    else if (spotteds.has(focused)){ return; } // already added

    else { // add new
        spotteds.add(focused);
        addGui(focused, spotteds.size);
    }
})

function addGui(focused, id) { // mutations
    const selectedForeigns = new Set([]);
    const gui = newGui(whenVisible, id, async ()=>{ // when apply button is clicked
        const { rootOriginals } = await (textForeignInfo(
            focused.tagName==="DIV" ?
                focused.textContent:
                focused.value
        ));

        localizeText(focused, selectedForeigns, rootOriginals);
    });

    async function whenVisible() { // when popover is visible
        const res = await (textForeignInfo(
            focused.tagName==="DIV"?
                focused.textContent:
                focused.value
        ));
        const { rootsToFix } = res;

        const popover = document.getElementById(`suggest${id}`);

        selectedForeigns.clear();
        listAlternatives({
            replacements: rootsToFix,
            container: popover,
            badFoundMsg: "Bu kelimeleri alternatifleriyle değiştirelim mi❓",
            noBadMsg: "Yabancı kelime bulunmadı🎉",
            selectedsSet: selectedForeigns,
        });
    }
    focused.before(gui);
}