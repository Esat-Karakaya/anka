async function handleBody(body) {
    const {
        sortedLoopable,
        returnReplacer,
        walkTxt
    } = siteFixUtils();

    const alternatives = await textForeignInfo(body.textContent);
    const sorted = sortedLoopable(alternatives);
    const replacer = returnReplacer(sorted);

    walkTxt(body, replacer);
}

handleBody(document.querySelector("body"));