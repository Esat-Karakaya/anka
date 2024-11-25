// elements that has buttons
const spotteds = new Set();

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
});

function addGui(focused, id) { // mutations
    const selectedForeigns = new Set();
    const gui = newGui(whenVisible, id, async ()=>{ // when apply button is clicked
        const replacements = await (textForeignInfo(
            focused.tagName==="DIV" ?
                focused.textContent:
                focused.value
        ));

        localizeText(focused, selectedForeigns, replacements);
    });

    async function whenVisible() { // when popover is visible
        const replacements = await (textForeignInfo(
            focused.tagName==="DIV"?
                focused.textContent:
                focused.value
        ));

        const popover = document.getElementById(`suggest${id}`);

        selectedForeigns.clear();
        listAlternatives({
            replacements,
            container: popover,
            selectedsSet: selectedForeigns,
        });
    }
    focused.before(gui);
}