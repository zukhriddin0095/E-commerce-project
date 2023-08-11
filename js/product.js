const ProductId = new URLSearchParams(location.search).get("product");

const favoriteCard = document.querySelector(".stock__boxes");
const discountCard = document.querySelector(".stock__boxes2");
const productbascet = document.querySelector(".hero__basket__aside");
const productTitlePrice = document.querySelector(".basket__bside__price");

function getElCard(pr) {
  return `
              <div class="basket__imgs">
                <img src="${pr.images[1]}" alt="">
                <img src="${pr.images[2]}" alt="">
                <img src="${pr.images[3]}" alt="">
              </div>
              <div class="bascet__img">
                <img src="${pr.images[0]}" alt=""> `;
}
function getCarPrice(pr) {
  return `
    <div class="bside__price__title">
     <h5>${pr.price} ₽</h5>
   <p>Обычная цена</p>
              </div>
       <div class="bside__price__title">
         <h4>${pr.price - 50} ₽</h4>
    <p>С картой Северяночки</p>
       </div>  `;
}

function getPrice(pr) {
  return `<div class="bside__price__title">
                  <h5>${pr.price + 50} ₽</h5>
                  <p>Обычная цена</p>
                </div>
                <div class="bside__price__title">
                  <h4>${pr.price} ₽</h4>
                  <p>С картой Северяночки</p>
                </div>`
}

//////tekshirish

let product = products.find((el) => el.id === +ProductId);
let newArray = [];

newArray.push(product);

newArray.map((pr) => {
  let result = getElCard(pr);
  productbascet.innerHTML += result;
});

newArray.map((pr) => {
  let result1 = getPrice(pr);
  productTitlePrice.innerHTML += result1;
});

///////

function getFavoritiesCard(product) {
  return `<div class="stock__card">
                <img
                  class="stock__img"
                  src="${product.images[0]}"
                  alt=""
                />
                <div class="stock__card__intro">
                  <div class="stock__card__price">
                    <h5 style="font-weight: 800">${product.price} ₽</h5>
                  </div>
                  <h5>${product.description}</h5>
                  <img
                    class="star"
                    src="./images/home/star.png"
                    alt="star grade"
                  />
                  <a href="./basket.html">В корзину</a>
                </div>
              </div>
`;
}
let newProducts = products.slice(-4);

favoriteCard.innerHTML = "";

newProducts.map((product) => {
  let card = getFavoritiesCard(product);
  favoriteCard.innerHTML += card;
});

let discountProducts = products.filter((pr) => pr.discount).slice(-4);

discountCard.innerHTML = "";

discountProducts.map((product) => {
  let cart = getFavoritiesCard(product);
  discountCard.innerHTML += cart;
});
