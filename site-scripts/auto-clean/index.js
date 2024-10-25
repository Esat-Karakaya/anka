import { handleEditable } from "./handle-editable";
import { handleTextarea } from "./handle-textarea";

console.log("hhheeeyyyyyoooooo")

document.addEventListener("keyup", changeHandler);

const prevVals = new Map();

async function changeHandler() {
    const focused = document.activeElement;
    if (
        focused.tagName==="DIV" &&
        focused.getAttribute("contenteditable")==="true" &&
        prevVals.get(prevVals)!==focused.textContent
    ) {
        handleEditable(focused);
        prevVals.set(prevVals, focused.textContent);
    } else if (
        focused.tagName==="TEXTAREA" &&
        prevVals.get(prevVals)!==focused.value
    ) {
        handleTextarea(focused);
        prevVals.set(prevVals, focused.value);
    }
}