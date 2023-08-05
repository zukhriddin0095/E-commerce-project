const productsRow = document.querySelector(".products-row");

function getProductCard(products) {
  const productsCard = document.createElement("div");

  productsCard.className = "products__card";

  const productcardbody = document.createElement("div");

  productcardbody.className = "product__card__body";

  const productImg = document.createElement("img");

  productImg.src = products.images[0]

  productImg.alt = products.name

  const productsCardFooter = document.createElement("products__Card__Footer");

  productsCardFooter.className = "products__Card__Footer";

  const productTitle = document.createElement("h3");

  const productTitleText = document.createTextNode(products.name);

  productTitle.appendChild(productTitleText);

  const productPrice = document.createElement("p");

  productPrice.textContent = products.price + " ₽"; 

  const productBtn = document.createElement("button");

  productBtn.innerHTML = "Add to the card";

  productsCard.append(productcardbody, productsCardFooter);

  productcardbody.appendChild(productImg);

  productsCardFooter.prepend(productBtn);

  productsCardFooter.prepend(productPrice);

  productsCardFooter.prepend(productTitle);

  productsCard.append(productcardbody, productsCardFooter);

  return productsCard;
}

products.map((products) => {
  let card = getProductCard(products);
  productsRow.append(card);
  // console.log(card);
});


// ////// toggle 


const kategoryMenu = document.querySelector("header #navbar-open");

const kategaoryMenuToggle = document.querySelector("header .navbar-responsive");

kategoryMenu.addEventListener("click", () => {
  kategaoryMenuToggle.classList.toggle("hidden");
});

const footerFixed = document.querySelector(".footer__fixed");
console.log(footerFixed);

footerFixed.addEventListener("click", () => {
  kategaoryMenuToggle.classList.toggle("hidden");
});

window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// /////// aos

AOS.init();

/////////////// backtop

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrolltop");
  scroll.classList.toggle("active", window.scrollY > 500);
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}