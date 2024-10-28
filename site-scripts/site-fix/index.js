function handleBody(body) {
    const {
        getAlternatives,
        sortedLoopable,
        returnReplacer,
        walkTxt
    } = siteFixUtils();
    
    const alternatives = getAlternatives(body.textContent);

    const sorted = sortedLoopable(alternatives);
    const replacer = returnReplacer(sorted);

    walkTxt(body, replacer);
}

handleBody(document.querySelector("body"))