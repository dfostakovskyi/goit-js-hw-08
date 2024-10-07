const jsBody = document.querySelector("body");
const jsButton = document.querySelector(".change-color");
let jsSpan = document.querySelector(".color");

jsButton.addEventListener("click", changeColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(event) {
  const newColor = getRandomHexColor();
  jsBody.style.backgroundColor = newColor;
  jsSpan.innerHTML = newColor;
}
