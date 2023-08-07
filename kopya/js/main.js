const categoriesMenu = document.querySelector(".categories-menu .container");

const categoryMenuToggleBtn = document.querySelector("header button");
const categoriesMenuDropdown = document.querySelector(".categories-menu");

categoryMenuToggleBtn.addEventListener("click", () => {
  categoriesMenuDropdown.classList.toggle("hidden");
});

categories.map((category) => {
  categoriesMenu.innerHTML += `<a href="category.html?category=${category.name}">${category.name}</a>`;
});
