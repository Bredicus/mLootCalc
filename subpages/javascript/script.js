var selectCreatures = document.querySelector('#ddcreatures');
creatures.sort((a, b) => (a.name > b.name) ? 1 : -1);
for (let i = 0; i < creatures.length; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', i);
    option.appendChild(document.createTextNode(creatures[i].name));
    selectCreatures.appendChild(option);
}

var selectSupplies = document.querySelector('#ddsupplies');
supplies.sort((a, b) => (a.name > b.name) ? 1 : -1);
for (let i = 0; i < supplies.length; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', i);
    option.appendChild(document.createTextNode(supplies[i].name));
    selectSupplies.appendChild(option);
}

var creatureButton = document.querySelector('#button0');
creatureButton.addEventListener('click', () => {
    var linkName = creatures[selectCreatures.selectedIndex].name.replace(/ /g, "_");
    linkName = linkName.replace(/'/g, "");

    var creatureExists = document.getElementById(linkName);
    if (creatureExists !== null) {
        return;
    }

    var element = document.createElement("div");
    element.setAttribute("class", "record-div");
    element.setAttribute("id", linkName);

    var head = "<table border='1' width='100%'>" +
        "<col style='width:4%'>" + 
        "<col style='width:17%'>" + 
        "<col style='width:8%'>" + 
        "<col style='width:8%'>" + 
        "<col style='width:18%'>" + 
        "<col style='width:4%'>" + 
        "<col style='width:38%'>" +
        "<col style='width:3%'>" +
            "<tbody>" +
                "<tr>" +
                    "<td ><img class='record-img' src=" + creatures[selectCreatures.selectedIndex].img + "></td>" +
                    "<td ><a href=https://wiki.mediviastats.info/" + linkName + " target='_blank'>" + creatures[selectCreatures.selectedIndex].name + "</a></td>" +
                    "<td >hp: " + creatures[selectCreatures.selectedIndex].health + "</td>" +
                    "<td >xp: " + creatures[selectCreatures.selectedIndex].experience + "</td>" +
                    "<td class='inline-center'><label for='kc" + linkName + "'>Kill Count: </label>" + 
                    "<input class='small-input' type='number' id='kc" + linkName + "' name='kc" + linkName + "' min='0' value='0'> </td>" + 
                    "<td class='inline-center'><img src='./subpages/images/min.png' onclick='updownClicked(\"kc" + linkName + "\", false)'> <img src='./subpages/images/max.png' onclick='updownClicked(\"kc" + linkName + "\", true)'> </td>" +
                    "<td class='inline-center creatures-total' id='total_" + linkName + "'>Creature loot total: 0</td>" +
                    "<td ><img class='icon-img' onclick=removeCreature('" + linkName + "') src='./subpages/images/close.png'></td>" +
                "</tr>" +
            "</tbody>" +
        "</table>";

        var skins = "";
        if (creatures[selectCreatures.selectedIndex].skin.length > 0) {
            skins = "<table border='1' width='100%'>" +
            "<col style='width:18%'>" + 
            "<col style='width:18%'>" + 
            "<col style='width:18%'>" + 
            "<col style='width:5%'>" + 
            "<col style='width:38%'>" + 
            "<col style='width:3%'>" + 
                "<thead>" +
                    "<tr>" +
                        "<th colspan='6'>Skins <img style='float:right' class='icon-img' id='smin_" + linkName + "' onclick=\"skinMinMax(0, '" + linkName + "')\" src='./subpages/images/min.png'>" +
                            "<img style='float:right;display:none;' class='icon-img' id='smax_" + linkName + "' onclick=\"skinMinMax(1, '" + linkName + "')\" src='./subpages/images/max.png'></th>" +
                    "</tr>" +
                "</thead>" +
                "<tbody id='stbody_" + linkName + "'>";

            for (let i = 0; i < creatures[selectCreatures.selectedIndex].skin.length; i++) {
                let sName = creatures[selectCreatures.selectedIndex].skin[i].name;
                let sLinkName = sName.replace(/ /g, "_");
                sLinkName = sLinkName.replace(/'/g, "");
                sLinkName = linkName + "_" + sLinkName;
                let sValue = creatures[selectCreatures.selectedIndex].skin[i].value;
                skins += "<tr id='skin_tr_" + linkName + "_" + sLinkName + "'>" +
                    "<td >" + sName + "</td>" +
                    "<td class='inline-center'><label for='" + sLinkName + "'>Value: </label>" + 
                    "<input onchange=\"valueChange('" + linkName + "', '" + sLinkName + "')\" type='number' id='" + sLinkName + "' name='" + sLinkName + "' min='0' value=" + sValue + "> </td>" + 
                    "<td class='inline-center'><label for='count_" + sLinkName + "'>Count: </label>" +
                    "<input onchange=\"valueChange('" + linkName + "', '" + sLinkName + "')\" type='number' id='count_" + sLinkName + "' name='count_" + sLinkName + "' min='0' value='0'></td>" +
                    "<td class='inline-center'><img src='./subpages/images/min.png' onclick='updownClicked(\"count_" + sLinkName + "\", false)'> <img src='./subpages/images/max.png' onclick='updownClicked(\"count_" + sLinkName + "\", true)'> </td>" +
                    "<td class='inline-center totals_" + linkName + "' id='total_" + sLinkName + "'>Individual item total: 0</td>" +
                    `<td ><img class='icon-img' onclick='removeRowElement(0, "${linkName}", "${sLinkName}")' src='./subpages/images/close.png'></td>` +
                "</tr>";
            }

            skins += "</tbody></table>";
        }

        var loot = "";
        if (creatures[selectCreatures.selectedIndex].loot.length > 0) {
            loot = "<table border='1' width='100%'>" +
            "<col style='width:18%'>" + 
            "<col style='width:18%'>" + 
            "<col style='width:18%'>" + 
            "<col style='width:5%'>" + 
            "<col style='width:38%'>" + 
            "<col style='width:3%'>" + 
                "<thead>" +
                    "<tr>" +
                        "<th colspan='6'>Loot <img style='float:right' class='icon-img' id='lmin_" + linkName + "' onclick=\"lootMinMax(0, '" + linkName + "')\" src='./subpages/images/min.png'>" +
                            "<img style='float:right;display:none;' class='icon-img' id='lmax_" + linkName + "' onclick=\"lootMinMax(1, '" + linkName + "')\" src='./subpages/images/max.png'></th>" +
                    "</tr>" +
                "</thead>" +
                "<tbody id='ltbody_" + linkName + "'>";

                for (let i = 0; i < creatures[selectCreatures.selectedIndex].loot.length; i++) {
                    let lName = creatures[selectCreatures.selectedIndex].loot[i].name;
                    let lLinkName = lName.replace(/ /g, "_");
                    lLinkName = lLinkName.replace(/'/g, "");
                    lLinkName = linkName + "_" + lLinkName;
                    let lValue = creatures[selectCreatures.selectedIndex].loot[i].value;
                    loot += "<tr id='loot_tr_" + linkName + "_" + lLinkName + "'>" + 
                        "<td >" + lName + "</td>" +
                        "<td class='inline-center'><label for='" + lLinkName + "'>Value: </label>" +
                        "<input onchange=\"valueChange('" + linkName + "', '" + lLinkName + "')\" type='number' id='" + lLinkName + "' name='" + lLinkName + "' min='0' value=" + lValue + "></td>" +
                        "<td class='inline-center'><label for='count_" + lLinkName + "'>Count: </label>" +
                        "<input onchange=\"valueChange('" + linkName + "', '" + lLinkName + "')\" type='number' id='count_" + lLinkName + "' name='count_" + lLinkName + "' min='0' value='0'></td>" +
                        "<td class='inline-center'><img src='./subpages/images/min.png' onclick='updownClicked(\"count_" + lLinkName + "\", false)'> <img src='./subpages/images/max.png' onclick='updownClicked(\"count_" + lLinkName + "\", true)'> </td>" +
                        "<td class='inline-center totals_" + linkName + "' id='total_" + lLinkName + "'>Individual item total: 0</td>" +
                        `<td ><img class='icon-img' onclick='removeRowElement(1, "${linkName}", "${lLinkName}")' src='./subpages/images/close.png'></td>` +
                    "</tr>";
                }
    
                loot += "</tbody></table>";
        }
        
        element.innerHTML = head + skins + loot;

    document.getElementById('creatures').appendChild(element);
    selectCreatures.focus();
});
creatureButton.addEventListener("keyup", () => { if ( event.keyCode === 13) creatureButton.click(); });

var supplyButton = document.querySelector('#button1');
supplyButton.addEventListener('click', () => {
    var linkName = supplies[selectSupplies.selectedIndex].name.replace(/ /g, "_");
    linkName = linkName.replace(/'/g, "");

    var supplyExists = document.getElementById(linkName);
    if (supplyExists !== null) {
        return;
    }

    var element = document.createElement("div");
    element.setAttribute("class", "record-div");
    element.setAttribute("id", linkName);

    var itemValue = supplies[selectSupplies.selectedIndex].cost;

    var head = "<table border='1' width='100%'>" +
        "<col style='width:5%'>" + 
        "<col style='width:16%'>" + 
        "<col style='width:17%'>" + 
        "<col style='width:17%'>" + 
        "<col style='width:5%'>" + 
        "<col style='width:37%'>" +
        "<col style='width:3%'>" +
            "<tbody>" +
                "<tr>" +
                    "<td ><img class='record-img' src=" + supplies[selectSupplies.selectedIndex].img + "></td>" +
                    "<td ><a href=https://wiki.mediviastats.info/" + linkName + " target='_blank'>" + supplies[selectSupplies.selectedIndex].name + "</a></td>" +
                    "<td ><label for='v" + linkName + "'>Value: </label>" +
                    "<input onchange=\"supplyValueChange('" + linkName + "')\" type='number' id='v" + linkName + "' name='v" + linkName + "' min='0' value=" + itemValue + "></td>" +
                    "<td ><label for='c" + linkName + "'>Count: </label>" +
                    "<input onchange=\"supplyValueChange('" + linkName + "')\" type='number' id='c" + linkName + "' name='c" + linkName + "' min='0' value='0'></td>" +
                    "<td class='inline-center'><img src='./subpages/images/min.png' onclick='updownClicked(\"c" + linkName + "\", false)'> <img src='./subpages/images/max.png' onclick='updownClicked(\"c" + linkName + "\", true)'> </td>" +
                    "<td class='inline-center supplies-total' id='t" + linkName + "'>Product total: 0</td>" +
                    "<td ><img class='icon-img' onclick=removeSupply('" + linkName + "') src='./subpages/images/close.png'></td>" +
                "</tr>" +
            "</tbody>" +
        "</table>";

        element.innerHTML = head;

    document.getElementById('supplies').appendChild(element);
    selectSupplies.focus();
});
supplyButton.addEventListener("keyup", () => { if ( event.keyCode === 13) supplyButton.click(); });

function openTab(evt, tabName) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    if (tabName === "creatures") {
        selectSupplies.style.display = "none";
        selectCreatures.style.display = "inline-block";
        supplyButton.style.display = "none";
        creatureButton.style.display = "inline";
    } else if (tabName === "supplies") {
        selectCreatures.style.display = "none";
        selectSupplies.style.display = "inline-block";
        creatureButton.style.display = "none";
        supplyButton.style.display = "inline";
    }
}

function removeCreature(name) {
    var elementToRemove = document.getElementById(name);
    elementToRemove.remove();
    totalLootValueUpdate();
}

function removeRowElement(mode, creatureName, itemName) {    
    if (mode === 0) {
        var elementToRemove = document.getElementById("skin_tr_" + creatureName + "_" + itemName);
    } else {
        var elementToRemove = document.getElementById("loot_tr_" + creatureName + "_" + itemName);
    }
    elementToRemove.remove();
    creatureTotalUpdate(creatureName);
    totalLootValueUpdate();
}

function skinMinMax(currentMode, name) {
    var minButton = document.getElementById("smin_" + name);
    var maxButton = document.getElementById("smax_" + name);
    var tbody = document.getElementById("stbody_" + name);
    if (currentMode === 0) {
        minButton.style.display = "none";
        maxButton.style.display = "inline";
        tbody.style.display = "none";
    } else {
        minButton.style.display = "inline";
        maxButton.style.display = "none";
        tbody.style.display = "";
    }
}

function lootMinMax(currentMode, name) {
    var minButton = document.getElementById("lmin_" + name);
    var maxButton = document.getElementById("lmax_" + name);
    var tbody = document.getElementById("ltbody_" + name);
    if (currentMode === 0) {
        minButton.style.display = "none";
        maxButton.style.display = "inline";
        tbody.style.display = "none";
    } else {
        minButton.style.display = "inline";
        maxButton.style.display = "none";
        tbody.style.display = "";
    }
}

function updownClicked(element_id, up_clicked) {
    var inputToChange = document.getElementById(element_id);
    var currentValue = inputToChange.value;

    if (up_clicked) {
        currentValue++;
    } else {
        currentValue--;
    }

    if (currentValue < 0) {
        currentValue = 0;
    }
    inputToChange.value = currentValue;

    var event = new Event('change');
    inputToChange.dispatchEvent(event);
}

function valueChange(creatureName, itemName) {
    var itemTotalTd = document.getElementById("total_" + itemName);
    var itemValue = document.getElementById(itemName).value;
    var quantity = document.getElementById("count_" + itemName).value;
    itemTotalTd.innerText = "Individual item total: " + itemValue * quantity;

    creatureTotalUpdate(creatureName);
    totalLootValueUpdate();
}

function creatureTotalUpdate(creatureName) {
    var creatureTotalTd = document.getElementById("total_" + creatureName);
    var allTotalTds = document.getElementsByClassName("totals_" + creatureName);
    var total = 0;
    for (let i = 0; i < allTotalTds.length; i++) {       
        let valueSplit = allTotalTds[i].innerText.split(" ");
        total += parseInt(valueSplit[valueSplit.length - 1]);
    }
    creatureTotalTd.innerText = "Creature loot total: " + total;
}

function totalLootValueUpdate() {
    var allTotals = document.getElementsByClassName("creatures-total");
    var totalLoot = 0;
    for (let i = 0; i < allTotals.length; i++) {
        let valueSplit = allTotals[i].innerText.split(" ");
        totalLoot += parseInt(valueSplit[valueSplit.length - 1]);
    }
    var totalLootElement = document.getElementsByClassName("loot-total");
    totalLootElement[0].innerText = "Loot: " + totalLoot;

    updateTotal();
}

function removeSupply(name) {
    var elementToRemove = document.getElementById(name);
    elementToRemove.remove();

    totalSupplyValueUpdate();
}

function supplyValueChange(name) {
    var value = document.getElementById("v" + name).value;
    var count = document.getElementById("c" + name).value;
    var tdTotal = document.getElementById("t" + name);
    tdTotal.innerText = "Product total: " + value * count;

    totalSupplyValueUpdate();
}

function totalSupplyValueUpdate() {
    var allTotals = document.getElementsByClassName("supplies-total");
    var totalLoot = 0;
    for (let i = 0; i < allTotals.length; i++) {
        let valueSplit = allTotals[i].innerText.split(" ");
        totalLoot += parseInt(valueSplit[valueSplit.length - 1]);
    }
    var totalSupplyElement = document.getElementsByClassName("supply-total");
    totalSupplyElement[0].innerText = "Waste: " + totalLoot;

    updateTotal();
}

function updateTotal() {
    var totalLootElement = document.getElementsByClassName("loot-total");
    var totalLootText = totalLootElement[0].innerText.split(" ");
    var totalLoot = parseInt(totalLootText[totalLootText.length - 1]);

    var totalSupplyElement = document.getElementsByClassName("supply-total");
    var totalSupplyText = totalSupplyElement[0].innerText.split(" ");
    var totalSupply = parseInt(totalSupplyText[totalSupplyText.length - 1]);

    var totalElement = document.getElementById("total");
    totalElement.innerHTML = "Total: " + (totalLoot - totalSupply);
}

function ddCreatureFocus() {
    creatureButton.focus();
}

function ddSupplyFocus() {
    supplyButton.focus();
}

document.getElementsByClassName("tablinks")[0].click();
