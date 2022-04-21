const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
const list = ingredients.map((elem) => {
  const li = document.createElement("li");
  li.textContent = elem;
  return li;
});

ulEl.append(...list);
