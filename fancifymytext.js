function increaseFont () {
    document.getElementById("textBox").style.fontSize = "24pt";
}

function fancySchmancy() {
    alert("Fancified!");
    const textElement = document.getElementById("textBox");

    textElement.style.fontWeight = "bold";
    textElement.style.color = "blue";
    textElement.style.textDecoration = "underline";
}

function boring() {
    alert("Borified...");
    const textElement = document.getElementById("textBox");

    textElement.style.fontWeight = "normal";
    textElement.style.color = "black";
    textElement.style.textDecoration = "none";
}

// Sentence ends with period
function moo() {
    const textElement = document.getElementById("textBox");
    
    var str = textElement.value.toUpperCase();
    const parts = str.split(".")
    textElement.value = parts.join("-MOO.");
}