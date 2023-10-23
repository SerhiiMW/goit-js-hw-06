const inputEl = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")
const text = textEl.firstChild



    // let length = 0;
    // length += 1
    // textEl.style.fontSize = length
   
    for (let i = 0; i <= 96; i += 1) {
        inputEl.addEventListener("input", (event) => {
        let length = event.currentTarget.value.trim().length
        length += i
    })
    console.log(length)
    }; 


// console.log(inputEl.previousSibling)