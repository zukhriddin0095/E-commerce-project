const productsRow = document.querySelector(".products-row");

const productsCard = document.createElement("div");

productsCard.className = "products__card";

const productcardbody = document.createElement("div");

productcardbody.className = "product__card__body";


const productImg = document.createElement("img");

productImg.src =
  "https://uploads-ssl.webflow.com/62361b0ee9fbf8a744598959/62be9351137b5e0541861308_Najot-logo-1.jpg";

productImg.alt = "product img";

const productsCardFooter = document.createElement("products__Card__Footer");

productsCardFooter.className = "products__Card__Footer";


const productTitle = document.createElement("h3");

const productTitleText = document.createTextNode("product Name");

const productPrice = document.createElement("p");

productPrice.textContent = " price";

const productBtn = document.createElement("button") ;

productBtn.innerHTML = "Add to the card"


productsCard.append(productcardbody, productsCardFooter);

productcardbody.appendChild(productImg);

productsCardFooter.prepend(productBtn);

productsCardFooter.prepend(productPrice);


