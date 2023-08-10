const discountProductsRow = document.querySelector(".discount-products-row");
const NewProductsRow = document.querySelector(".new-products-row");
const PopulPrproductsRow = document.querySelector(".popular-products-row");

function getProductCard(products) {
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

  productBtn.innerHTML = "Add to the card";
  productBtn.addEventListener('click', () => addToCard(products.id));

  productsCard.append(productcardbody, productsCardFooter);

  productcardbody.appendChild(productImg);

  productsCardFooter.prepend(productBtn);

  productsCardFooter.prepend(productPrice);

  productsCardFooter.prepend(productTitle);


  return productsCard;
}

function addToCard(id) {
  let product = products.find((pr) => pr.id === id);
  let check = card.find((pr) => pr.id === id)

    if (check) {

      card = card.map((pr) => {
        if (pr.id === id) {
          pr.quantity++;
        }
        return pr;
      });

    }else {
      product.quantity = 1
      card.push(product);
    }
localStorage.setItem("card", JSON.stringify(card));
    
  getCardTotal();
}

let discountProducts = products.filter((pr) => pr.discount).slice(-4);

discountProducts.map((product) => {
  let card = getProductCard(product);
  console.log(card);
  discountProductsRow.append(card);
});





let newProducts = products.slice(-4);

newProducts.map((product) => {
  let card = getProductCard(product);
  NewProductsRow.append(card);
});

let popularProducts = products
  .toSorted((a, b) => a.rating - b.rating)
  .slice(-4);

popularProducts.map((product) => {
  let card = getProductCard(product);
  PopulPrproductsRow.append(card);
});

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