const basketRow = document.querySelector(".basket-container");

function getBasketRow(product) {
  const bascetCard = document.createElement("div");
  bascetCard.className = "bascet__card";

  const basketCardImg = document.createElement("div");
  basketCardImg.className = "basket__card__img";

  const cardImg = document.createElement("img");
  cardImg.src = product.images[0];

  const basketCardContent = document.createElement("div");
  basketCardContent.className = "basket__card__content";

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = product.name;

  const cardText = document.createElement("p");
  cardText.textContent = product.description;

  const cardPrice = document.createElement("p");
  cardPrice.textContent = product.price + " ₽";

  const basketBtnMinus = document.createElement("button");
  basketBtnMinus.textContent = "-";
  basketBtnMinus.addEventListener("click", () => {
    dencreaseQuantity(product.id);
  });

  const basketQuantity = document.createElement("span");
  basketQuantity.textContent = product.quantity;

  const basketBtnPlus = document.createElement("button");
  basketBtnPlus.textContent = "+";
  basketBtnPlus.addEventListener("click", () => {
    increaseQuantity(product.id);
  });

  bascetCard.append(basketCardImg, basketCardContent);
  basketCardImg.append(cardImg);
  basketCardContent.append(
    cardTitle,
    cardText,
    cardPrice,
    basketBtnMinus,
    basketQuantity,
    basketBtnPlus
  );

  return bascetCard;
}

function getCartProducts() {
  basketRow.innerHTML = "";
  card.map((pr) => {
    let row = getBasketRow(pr);
    basketRow.append(row);
    // console.log(pr);
  });
}
getCartProducts();

function increaseQuantity(id) {
  card = card.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  localStorage.setItem("card", JSON.stringify(card));
  getCartProducts();
}

function dencreaseQuantity(id) {
  let products = card.find((pr) => pr.id === id);
  if (products.quantity === 1) {
    let isDelete = confirm("do you want to delete this product?");
    if(isDelete){
      card = card.filter((pr) => pr.id !== id);
    }
    getCardTotal();
  } else {
    card = card.map((pr) => {
      if (pr.id === id) {
        pr.quantity--;
      }
      return pr;
    });
  }

  localStorage.setItem("card", JSON.stringify(card));
  getCartProducts();
}
