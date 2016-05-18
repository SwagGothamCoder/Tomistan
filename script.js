var textElement = document.getElementById("day");
if (textElement.innerText) {
    textElement.innerText = "newtext";
}
else
if (textElement.textContent) {
    textElement.textContent = "newtext";   
}
