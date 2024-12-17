async function handleBody() {
	const {
		sortedLoopable,
		returnReplacer,
		walkTxt,
		getTexts
	} = siteFixUtils();

	const contentText = getTexts();

	console.log(contentText)
	const alternatives = await textForeignInfo(contentText);
	const sorted = sortedLoopable(alternatives);
	const replacer = returnReplacer(sorted);

	walkTxt(replacer);
}

handleBody();