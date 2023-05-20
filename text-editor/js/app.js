function bold() {
    var text = document.getElementById("textbox");
    if (text.style.fontWeight === "bold") {
        text.style.fontWeight = "normal";
    } else {
        text.style.fontWeight = "bold";
    }
}

function italic() {
    var text = document.getElementById("textbox");
    if(text.style.fontStyle === "italic"){
        text.style.fontStyle="normal"
    }else{
        text.style.fontStyle="italic"
    }
}

function underline(){
    var text = document.getElementById("textbox");
    if (text.style.textDecoration === "underline") {
        text.style.textDecoration = "none"
    } else {
        text.style.textDecoration = "underline"
    }
}

color.addEventListener("input", function (e) {
    var text = document.getElementById("textbox");
    text.style.color = this.value;
})

function left() {
    var text = document.getElementById("textbox");
    text.style.textAlign = "left";
}
function center() {
    var text = document.getElementById("textbox");
    text.style.textAlign = "center";
}
function right() {
    var text = document.getElementById("textbox");
    text.style.textAlign = "right";
}
function outline(){
    var text=document.getElementById("textbox");
    text.style.outline="none";
    text.style.fontSize="16px"
}