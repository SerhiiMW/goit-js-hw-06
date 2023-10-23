function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color")
const pEl = document.querySelector(".color")

btn.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor()
  pEl.textContent = getRandomHexColor()
})

