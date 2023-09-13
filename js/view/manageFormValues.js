function getEntries() {
    var getText = window.location.search.substring(1);
    const urlParams = new URLSearchParams(getText);

    const entries = urlParams.entries();
    return entries;
}

function get(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)) {
        if (typeof name[1] == "undefined") {
            return "";
        }
        return decodeURIComponent(name[1]);
    }
    return "";
}

function getHintText(getHintFunc) {
    var hintText = "";
    var entries = getEntries();
    for (const entry of entries) {
        hintText += getHintFunc(entry);
    }
    return hintText;
}

function getValueById(id){
    return document.getElementById(id).value;
}

function setValueById(id, value){
    if (typeof value == "boolean") {
        document.querySelector(`#${id}`).checked = value;
    } else {
        document.getElementById(id).value = value;
    }
}

function checkIfDefaultValue(elem, defaultValue){
    elem = Number.parseInt(elem);
    return Number.isInteger(elem) ? elem : defaultValue;
}

function getFlag(name) {
    let flag = get(name) === "true" ? true : false;
    return flag;
}

function getUtility(name, defaultValue) {
    let utility = Number.parseInt(get(name));
    if (!Number.isInteger(utility)) {
        utility = defaultValue;
    }
    setValueById(name, utility);
    return utility
}

export { getEntries, get, getHintText, getValueById, setValueById, checkIfDefaultValue, getFlag, getUtility };