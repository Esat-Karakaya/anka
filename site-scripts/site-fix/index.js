async function handleBody(body) {
    const {
        sortedLoopable,
        returnReplacer,
        walkTxt
    } = siteFixUtils();
    
    const { rootOriginals } = await textForeignInfo(body.textContent);
    const alternatives = await getAlternatives(rootOriginals);

    const sorted = sortedLoopable(alternatives);
    const replacer = returnReplacer(sorted);

    walkTxt(body, replacer);
}

handleBody(document.querySelector("body"));