function newGui(makeVisible, id, applyHandle) {

	const guiStr=`
		<div class="gui-container">
			<input class="toggle-gui-btn" type="checkbox">
			<div id="suggest${id}" class="suggester">
				<div class="foreign-suggest">
					<p class="statusP">Yabancı kelime bulunmadı🎉</p>
				</div>
				<div class="actions" >
					<div role="button" style="display: none" class="applyBtn">Uygula</div>
					<div role="button" class="closeBtn">Kapat</div>
				</div>
			</div>
		</div>
	`;
	// creating element from string
	const createdGui = 
	(new DOMParser().parseFromString(guiStr, "text/html")).querySelector("body>*"); 
	removeWhitespace(createdGui);

	const checkbox = createdGui
	.querySelector('.toggle-gui-btn');

	// check when opened
	checkbox.addEventListener("click", ()=>{
		if (checkbox.checked === true) {
			makeVisible();
		}
	});

	// close button
	createdGui
	.querySelector('.closeBtn')
	.addEventListener("click", ()=>{
		checkbox.checked=false;
	});

	// apply Button
	createdGui
	.querySelector(".applyBtn")
	.addEventListener("click", applyHandle);

	return createdGui;
}

/* 
Removes old list
Updates status p tag
Adds new replacements
Adds event listeners to checkboxes inside li's
*/
function listAlternatives({replacements, container, selecteds}) {
	const foreignSuggest = container.querySelector(".foreign-suggest");
	
	const applyBtn=container
	.querySelector(".applyBtn")

	const p = foreignSuggest.querySelector("p");
	const badWords = Object.keys(replacements);

	/* Remove old stuff */
	const oldUls = foreignSuggest.querySelectorAll("ul");
	oldUls.forEach((ul)=>ul.remove());

	/* List words */
	if (badWords.length) {
		p.innerText = "Bu kelimeleri alternatifleriyle değiştirelim mi❓";
		applyBtn.style.display="inline-block";
	}else {
		p.innerText = "Yabancı kelime bulunmadı🎉";
		applyBtn.style.display="none";
		return;
	}

	const replaceList=document.createElement("ul");

	// select/unselect all option
	const selectAll=selectAllItem({selecteds, replacements, replaceList});
	replaceList.appendChild(selectAll);

	// creating all li's
	for (const badWord in replacements){
		// create li
		const wordReplace = newListItem({
			selecteds,
			replacements,
			badWord,
			replaceList,
		});
		
		replaceList.appendChild(wordReplace);
	}

	foreignSuggest.appendChild(replaceList);
}

// removes white space in a DOM element made from string
function removeWhitespace(node) {
	// Loop through each child node in reverse to avoid index issues
	for (let i = node.childNodes.length - 1; i >= 0; i--) {
		const child = node.childNodes[i];
		
		// If the child is a text node and contains only whitespace, remove it
		if (child.nodeType === Node.TEXT_NODE && !/\S/.test(child.nodeValue)) {
			node.removeChild(child);
		}
		// If the child is an element node, recursively clean it as well
		else if (child.nodeType === Node.ELEMENT_NODE) {
			removeWhitespace(child);
		}
	}
}