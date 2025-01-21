async function handleBody() {
	const {
		sortedLoopable,
		returnReplacer,
		walkTxt,
		getTexts
	} = siteFixUtils();

	const contentText = getTexts();

	const alternatives =
	await textForeignInfo(contentText, false, true); // get only one replacement and count all foreigns

	const sorted = sortedLoopable(alternatives);
	const replacer = returnReplacer(sorted);

	walkTxt(replacer);
}

handleBody();