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
    // add clear prototype to selectedForeign
    const clearPrototype = {
        clear() {
            for (const badWord in this)
                delete this[badWord];
        },
    };
    const selectedForeigns = Object.create(clearPrototype);

    const gui = newGui(whenVisible, id, () => localizeText(focused, selectedForeigns));

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
            selecteds: selectedForeigns,
        });
    }
    focused.before(gui);
}