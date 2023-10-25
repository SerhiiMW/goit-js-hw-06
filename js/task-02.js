const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

createMarkup(ingredients);
function createMarkup(ingredients) {
  const nodesArr = ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;
    liEl.classList.add("item");
    return liEl;
  });
  list.append(...nodesArr);
}

