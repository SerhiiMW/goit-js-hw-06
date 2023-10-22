const elInput = document.querySelector("input")
const inputLength = document.querySelector('input[data-length="6"]');


// const inputValid = document.querySelector("style #validation-input.valid #borderColor")
// const inputValid = document.style

elInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.trim().length === Number(inputLength.dataset.length)
    ) {
        elInput.style.borderColor = "#4caf50";
    } else {
        elInput.style.borderColor = "#f44336"
    }
    }); 

// console.log(inputValid)
// console.dir(inputValid)
