async function handleBody(body) {
	const {
		sortedLoopable,
		returnReplacer,
		walkTxt,
		getTexts
	} = siteFixUtils();

	const contentText = getTexts(body);
	const alternatives = await textForeignInfo(contentText);
	const sorted = sortedLoopable(alternatives);
	const replacer = returnReplacer(sorted);

	walkTxt(body, replacer);
}

handleBody(document.querySelector("body"));