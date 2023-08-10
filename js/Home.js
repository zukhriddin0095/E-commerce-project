const discountProductsRow = document.querySelector(".discount-products-row");
const NewProductsRow = document.querySelector(".new-products-row");
const PopulPrproductsRow = document.querySelector(".popular-products-row");

function getProductCard(products) {
  // let checkFavorites = favoritesProducts.find((el) => el.id === id);

  let check = card.find((pr) => pr.id === products.id);

  const productsCard = document.createElement("div");

  productsCard.className = "products__card";

  const productcardbody = document.createElement("div");

  productcardbody.className = "product__card__body";

  const productImg = document.createElement("img");

  productImg.src = products.images[0];

  productImg.alt = products.name;

  const productsCardFooter = document.createElement("products__Card__Footer");

  productsCardFooter.className = "products__Card__Footer";

  const productTitle = document.createElement("h3");

  // const productTitleText = document.createTextNode(products.name);

  productTitle.innerHTML = `<a href="../allproduct.html">${products.name}</a>`;

  // productTitle.appendChild(productTitleText);

  const productPrice = document.createElement("p");

  productPrice.textContent = products.price + " ₽";

  const productBtn = document.createElement("button");

  productBtn.className = check ? "active-card" : "";

  productBtn.innerHTML = "Add to the card";
  productBtn.addEventListener("click", () => addToCard(products.id));

  const likeBtns = document.createElement("button");

  // likeBtns.className = checkFavorites ? "active-card" : "";

  likeBtns.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>`;
  likeBtns.className = "like__Btns";

  likeBtns.addEventListener("click", () => addToFavorites(products.id));

  productsCard.append(productcardbody, productsCardFooter);

  productcardbody.appendChild(productImg);

  productsCardFooter.prepend(productBtn);

  productsCardFooter.prepend(productPrice);

  productsCardFooter.prepend(productTitle, likeBtns);

  return productsCard;
}

////////addtocard

function addToCard(id) {
  let product = products.find((pr) => pr.id === id);
  let check = card.find((pr) => pr.id === id);

  if (check) {
    card = card.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
  } else {
    product.quantity = 1;
    card.push(product);
  }
  localStorage.setItem("card", JSON.stringify(card));
  getProducts();
  getCardTotal();
}

////// addtofavorite

function addToFavorites(id) {
  let checkFavorite = favoritesProducts.find((el) => el.id === id);
  let product = products.find((el) => el.id === id);
  if (checkFavorite) {
    favoritesProducts = favoritesProducts.filter((el) => el.id !== id);
  } else {
    favoritesProducts.push(product);
  }
  localStorage.setItem(FAVORITE, JSON.stringify(favoritesProducts));
  // getproducts();
  getFavoriteNumber();
}

////

function getProducts() {
  let discountProducts = products.filter((pr) => pr.discount).slice(-4);

  discountProductsRow.innerHTML = "";

  discountProducts.map((product) => {
    let card = getProductCard(product);
    discountProductsRow.append(card);
  });

  let newProducts = products.slice(-4);

  NewProductsRow.innerHTML = "";

  newProducts.map((product) => {
    let card = getProductCard(product);
    NewProductsRow.append(card);
  });

  let popularProducts = products
    .toSorted((a, b) => a.rating - b.rating)
    .slice(-4);

  PopulPrproductsRow.innerHTML = "";

  popularProducts.map((product) => {
    let card = getProductCard(product);
    PopulPrproductsRow.append(card);
  });
}
getProducts();
///////////// Специальные предложения

const articles = [
  {
    title: "Оформите карту «Северяночка",
    description: "И получайте бонусы при покупке в магазинах и на сайте",
    images: "../images/home/Карта лояльности-10 1.png",
  },
  {
    title: "Покупайте акционные товары",
    description: "И получайте бонусы при покупке в магазинах и на сайте",
    images: "../../images/home/savat.png",
  },
];

let specialOffersCards = document.querySelector(".special_offers__cards");

function getArticleCard(articles) {
  const specialOffersAside = document.createElement("div");

  specialOffersAside.className = "Special_offers__aside";

  const specialAsideTexts = document.createElement("div");

  specialAsideTexts.className = "Special__aside__texts";

  const sATittle = document.createElement("h3");

  const sATittleText = document.createTextNode(articles.title);

  sATittle.appendChild(sATittleText);

  const sADesc = document.createElement("p");

  const sADescText = document.createTextNode(articles.description);

  sADesc.appendChild(sADescText);

  const specialAsideImg = document.createElement("div");

  specialAsideImg.className = "Special__aside__img";

  const sAImg = document.createElement("img");

  sAImg.src = articles.images;
  sAImg.alt = "rasm";

  specialOffersAside.append(specialAsideTexts, specialAsideImg);

  specialAsideTexts.append(sATittle, sADesc);

  specialAsideImg.appendChild(sAImg);

  return specialOffersAside;
}

articles.map((el) => {
  let card = getArticleCard(el);
  specialOffersCards.append(card);
});

//////favorites

///////// Статьи

const stati = [
  {
    image: "../images/home/stati (1).png",
    title: "Режим использования масок и перчаток на территории магазинов",
    description:
      "Подробная информация о режимах использования масок и перчаток на территории магазинов ЛЕНТА. Информация обновляется каждый будний день.",
  },
  {
    image: "../images/home/stati (2).png",
    title: "Режим использования масок и перчаток на территории магазинов",
    description:
      "Подробная информация о режимах использования масок и перчаток на территории магазинов ЛЕНТА. Информация обновляется каждый будний день.",
  },
  {
    image: "../images/home/stati (3).png",
    title: "Режим использования масок и перчаток на территории магазинов",
    description:
      "Подробная информация о режимах использования масок и перчаток на территории магазинов ЛЕНТА. Информация обновляется каждый будний день.",
  },
];

const articlesWrapperBox = document.querySelector(".articles__wrapper__box");

function getStatiCard(stati) {
  const articlesWrapperBoxCard = document.createElement("div");
  articlesWrapperBoxCard.className = "articles__wrapper__box__card";

  const aWBCardImg = document.createElement("img");
  aWBCardImg.src = stati.image;

  const articlesCardIntro = document.createElement("div");
  articlesCardIntro.className = "articles__card__intro";

  const aCITittle = document.createElement("h5");
  aCITittle.innerHTML = `<a href="../statii.html">${stati.title}</a>`;

  const sAText = document.createElement("p");
  const sATittleText = document.createTextNode(stati.description);
  sAText.appendChild(sATittleText);

  const sALink = document.createElement("a");
  sALink.href = "../statii.html";
  const sALinkText = document.createTextNode("Подробнее");
  sALink.appendChild(sALinkText);

  articlesWrapperBoxCard.append(aWBCardImg, articlesCardIntro);
  // articlesWrapperBoxCard.append(articlesCardIntro);

  articlesCardIntro.append(aCITittle, sAText, sALink);

  return articlesWrapperBoxCard;
}

stati.map((card) => {
  let result = getStatiCard(card);
  articlesWrapperBox.append(result);
});

///// Ab tap

const tabBtn = document.querySelectorAll(".tabs button");
const tabContents = document.querySelectorAll(".tab-content");
let active = 0;

function getTabsContents() {
  tabContents.forEach((el, i) => {
    if (i !== active) {
      el.style.display = "none";
      tabBtn[i].classList.remove("active-tab");
    } else {
      el.style.display = "block";
      tabBtn[i].classList.add("active-tab");
    }
  });
}

getTabsContents();

tabBtn.forEach((el, i) => {
  el.addEventListener("click", function () {
    active = i;
    getTabsContents();
  });
});

//////////
