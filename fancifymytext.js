
function makeTextBigger(){
    document.getElementById("textInput").style.fontSize = "24pt";
}


function makeTextBoring() {
    if (document.getElementById("boring").checked == true) {    
        document.getElementById("textInput").style.fontSize = "12pt";
        document.getElementById("textInput").style.color = "black";
        document.getElementById("textInput").style.textDecoration = "none";
        document.getElementById("boring").checked = false;
    }
}

function makeTextFancy() {
    if (document.getElementById("fancy").checked == true) {
        document.getElementById("textInput").style.color = "blue";
        document.getElementById("textInput").style.textDecoration = "underline";
        document.getElementById("fancy").checked = false;
    }
}

function Moo() {
    var mooNum = document.getElementById("textInput");
    var parts = mooNum.value.split(".");

    mooNum.value = mooNum.value.toUpperCase();
    for (var i = 0; i< parts.length; i++){
        parts[i] = parts[i] + "Moo";
    }
    mooNum.value = parts.join(".");
}