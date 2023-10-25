function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxes = document.querySelector("#boxes")
const inputEl = document.querySelector("input")

btnCreate.addEventListener("click", createBoxes)
function createBoxes(amount) {
  const divEl = document.createElement("div");
  // amount = inputEl.currentTarget.value
  divEl.style.width = "30 px";
  divEl.style.height = "30 px";
  divEl.style.color = getRandomHexColor;
  boxes.append(divEl)
}

btnCreate.addEventListener("click", destroyBoxes)
function destroyBoxes() {
  boxes.firstChild.remove();
}
// console.log(btnDestroy)
