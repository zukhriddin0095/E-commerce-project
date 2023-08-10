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

let cardJson = localStorage.getItem("card")

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
  favoritesCard.textContent = favoritesProducts.length
}
getFavoriteNumber();
