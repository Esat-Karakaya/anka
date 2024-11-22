document.addEventListener("keyup", changeHandler);

const prevVals = new Map();

function changeHandler() {
    const focused = document.activeElement;
    if (
        focused.tagName==="DIV" &&
        focused.getAttribute("contenteditable")==="true" &&
        prevVals.get(focused)!==focused.textContent
    ) {
        handleEditable(focused);
        prevVals.set(focused, focused.textContent);
    } else if (
        focused.tagName==="TEXTAREA" &&
        prevVals.get(focused)!==focused.value
    ) {
        handleTextarea(focused);
        prevVals.set(focused, focused.value);
    }
}