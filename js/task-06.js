const elInput = document.querySelector("input")
const inputLength = document.querySelector('input[data-length="6"]');


elInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.trim().length !== Number(inputLength.dataset.length)
    ) {
        elInput.classList.add("invalid");
    } else {
        elInput.classList.replace("invalid", "valid");
    }
    });


