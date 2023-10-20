const ulItem = document.querySelectorAll(".item")
console.log(`Number of categories: ${ulItem.length}`)

ulItem.forEach((element, i) => {
    const titleLi = element.querySelector("h2");
    console.log("");
    console.dir(titleLi.textContent);
    const ulItemLi = element.querySelectorAll("li");
    console.dir(`Element: ${ulItemLi.length}`)
})
