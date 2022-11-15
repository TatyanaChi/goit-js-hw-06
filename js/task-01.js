const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);

itemEl.forEach(categoriesList);

function categoriesList(categorie) {
  const titleEl = categorie.firstElementChild;
  console.log("Category:", titleEl.textContent);

  const listItemEl = titleEl.nextElementSibling;
  console.log("Elements:", listItemEl.childElementCount);
}
