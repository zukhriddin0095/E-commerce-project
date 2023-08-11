// navbar shrink

window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

//////// toggle

const kategoryMenu = document.querySelector("header #navbar-open");

const kategaoryMenuToggle = document.querySelector("header .navbar-responsive");

kategoryMenu.addEventListener("click", () => {
  kategaoryMenuToggle.classList.toggle("hidden");
});

const footerFixed = document.querySelector(".footer__fixed");

footerFixed.addEventListener("click", () => {
  kategaoryMenuToggle.classList.toggle("hidden");
});

categories.map((category) => {
  kategaoryMenuToggle.innerHTML += `<a href="../categories1440.html?category=${category.name}">${category.name}</a>`;
});

/////// basket
const totalCard = document.querySelector(".card-total");

let cardJson = localStorage.getItem("card");

let card = JSON.parse(cardJson) || [];

function getCardTotal() {
  totalCard.textContent = card.length;
}
getCardTotal();

const FAVORITE = "favorite";

let favoritesProductsJson = localStorage.getItem(FAVORITE);
let favoritesProducts = JSON.parse(favoritesProductsJson) || [];

const favoritesCard = document.querySelector(".favorites-total");

function getFavoriteNumber() {
  favoritesCard.textContent = favoritesProducts.length;
}
getFavoriteNumber();

/////// modal

const modalBtn = document.querySelector(".modal-btn");
const modalGO = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal-close-btn");
const modalGoContent = document.querySelector(".modal-content");

modalBtn.addEventListener("click", () => {
  modalGO.classList.add("modal-active");
  modalGoContent.classList.add("modal__gocontent");
});

closeBtn.addEventListener("click", () => {
  modalGO.classList.remove("modal-active");
  modalGoContent.classList.remove("modal__gocontent");

});

window.addEventListener("click", (e) => {
 if (e.target == modalGO) {
  modalGO.classList.remove("modal-active");
  modalGoContent.classList.remove("modal__gocontent");
 }
})


// console.log(modalBtn);
