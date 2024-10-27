function createRange(node, targetPosition) {
    let range = document.createRange();
    range.selectNode(node);
    range.setStart(node, 0);

    let pos = 0;
    const stack = [node];
    while (stack.length > 0) {
        const current = stack.pop();

        if (current.nodeType === Node.TEXT_NODE) {
            const len = current.textContent.length;
            if (pos + len >= targetPosition) {
                range.setEnd(current, targetPosition - pos);
                return range;
            }
            pos += len;
        } else if (current.childNodes && current.childNodes.length > 0) {
            for (let i = current.childNodes.length - 1; i >= 0; i--) {
                stack.push(current.childNodes[i]);
            }
        }
    }

    range.setEnd(node, node.childNodes.length);
    return range;
};

// counting from end to start
function setCaret(element, fromEndPos) {
    const {length} = element.textContent;

    if (length < fromEndPos || 0 > fromEndPos) {
        fromEndPos=0;
    }

    const fromStartPos = length - fromEndPos;
    const range = createRange(element, fromStartPos);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
};

// doesn't work on textarea
// counting from end to start
function getCaret(element) {
    let caretOffset = 0;
    let doc = element.ownerDocument;
    let win = doc.defaultView;
    let sel = win.getSelection();
    if (sel.rangeCount > 0) {
        let range = win.getSelection().getRangeAt(0);
        let preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretOffset = preCaretRange.toString().length;
    }

    return element.textContent.length-caretOffset;
}