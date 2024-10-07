const jsControls = document.querySelector("#controls");
const jsBoxes = document.querySelector("#boxes");
const jsInput = document.querySelector("input");
const jsCreate = document.querySelector("button[data-create]");
const jsDestroy = document.querySelector("button[data-destroy]");

let size = 30;

jsCreate.addEventListener("click", creatorMarkup);
jsDestroy.addEventListener("click", destroyBoxes);
    
  jsBoxes.innerHTML = "";
 
function creatorMarkup() {
  if (jsInput.value < 1 || jsInput.value > 100) {
    return;
  }

  createBoxes(jsInput.value);
}

function createBoxes(amount) {
  
  destroyBoxes();

  const boxes = [];

  for (let i = 0; i < amount; i++) {

    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);

    // jsBoxes.append(box);
    size += 10;
  }

jsBoxes.append(...boxes);

  jsInput.value = "";
}

function destroyBoxes() {
  jsBoxes.innerHTML = "";
  size = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
