const textInput = document.querySelector("#name-input")
const textOutput = document.querySelector("#name-output")
const textSpan = document.querySelector("span")
const textNon = textSpan.textContent


textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() === "") {
       textOutput.textContent = textNon
    } else textOutput.textContent = event.currentTarget.value.trim()
});

