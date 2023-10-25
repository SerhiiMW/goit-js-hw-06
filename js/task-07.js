const inputEl = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")

let startFontSizeNumber = inputEl.min;

inputEl.addEventListener("input", () => {
    startFontSizeNumber = inputEl.valueAsNumber;
    textEl.style.fontSize = startFontSizeNumber + "px";
    })

 