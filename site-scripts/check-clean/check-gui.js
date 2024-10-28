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

    createdGui.querySelector(".applyBtn").addEventListener("click", applyHandle);

    return createdGui;
}

/* 
Removes old list
Updates status p tag
Adds new replacements
Adds event listeners to checkboxes inside li's
*/
function listAlternatives({replacements, container, badFoundMsg, noBadMsg, selectedsSet}) {
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
        p.innerText = badFoundMsg;
        applyBtn.style.display="inline-block";
    }else {
        p.innerText = noBadMsg;
        applyBtn.style.display="none";
        return;
    }

    const replaceList=document.createElement("ul");

    //select-unselect all option
    const selectAll=newListItem("Hepsini Seç", event => {
        const checkBoxes = replaceList.querySelectorAll('input[type="checkbox"]');

        for (let i = 1; i < checkBoxes.length; i++) {
            const box = checkBoxes[i];
            box.checked=event.target.checked
            if (event.target.checked) {
                for (const element of badWords) {
                    selectedsSet.add(element);
                }
            }else {
                selectedsSet.clear();
            }
        }
    });
    replaceList.appendChild(selectAll);

    // creating all li's
    Object.entries(replacements).forEach(enrty => {
        // create li
        const wordReplace = newListItem(`${localeCap(enrty[0])} ➡️ ${localeCap(enrty[1])}`, 
        
        event => {
            // when checkbox is clicked

            if (event.target.checked) {
                selectedsSet.add(enrty[0]);
            } else {
                selectedsSet.delete(enrty[0]);
            }

            updateSelectAll(replaceList, selectedsSet);
        });
        
        replaceList.appendChild(wordReplace);
    })

    foreignSuggest.appendChild(replaceList);
}

// creates a list item
function newListItem(str, checkHandle) {
    const li=document.createElement("li");
    li.innerText=str;

    // selection button
    const select=document.createElement("input");
    select.setAttribute("type", "checkbox");
    select.classList.add("checkOption");
    select.addEventListener("change", checkHandle);

    li.prepend(select);

    return li;
}

function updateSelectAll(ul, set) {
    const checkBoxes = ul.querySelectorAll('input[type="checkbox"]');

    checkBoxes[0].checked = set.size === checkBoxes.length-1;
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