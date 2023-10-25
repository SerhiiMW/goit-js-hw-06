const ulItem = document.querySelectorAll(".item")
console.log(`Number of categories: ${ulItem.length}`)

ulItem.forEach((element, i) => {
    const titleLi = element.firstElementChild;
    console.log("");
    console.dir(titleLi.textContent);
    const ulItemLi = element.lastElementChild.children;
    console.dir(`Element: ${ulItemLi.length}`)
})
