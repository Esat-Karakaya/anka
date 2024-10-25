function newGui(checking, id, applyHandle) {

    const guiStr=`
        <div>
            <button popovertarget="suggest${id}"  class="check-btn">✔️</button>
            <div id="suggest${id}" popover class="suggester">
                <div class="foreign-suggest">
                    <p class="statusP">Yabancı kelime bulunmadı🎉</p>
                </div>
                <button class="applyBtn">Uygula</button>
            </div>
        </div>
    `;
    // creating element from string
    const createdGui = 
    (new DOMParser().parseFromString(guiStr, "text/html")).querySelector("body>*"); 

    createdGui.querySelector(".suggester").addEventListener("toggle", (event)=>{
        if (event.newState === "open") {
            checking();
        }
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
    const p = container.querySelector("p");
    const badWords = Object.keys(replacements);

    /* Remove old stuff */
    const oldUls = container.querySelectorAll("ul");
    oldUls.forEach((ul)=>ul.remove());

    /* List words */
    if (badWords.length) {
        p.innerText = badFoundMsg;
    }else {
        p.innerText = noBadMsg;
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

    container.appendChild(replaceList);
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

    li.appendChild(select);

    return li;
}

function updateSelectAll(ul, set) {
    const checkBoxes = ul.querySelectorAll('input[type="checkbox"]');

    checkBoxes[0].checked = set.size === checkBoxes.length-1;
}