
const category = new URLSearchParams(location.search).get("category");

const CatalogMenu = document.querySelector(".Toogle__menu");

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

  const productTitleText = document.createTextNode(products.name);

  productTitle.appendChild(productTitleText);

  const productPrice = document.createElement("p");

  const productdesc = document.createElement("p");

  productdesc.className = "product__descreption";

  productdesc.textContent = products.description;

  productPrice.textContent = products.price + " ₽";

  const productBtn = document.createElement("button");

  productBtn.innerHTML = "Add to the card";

  productsCard.append(productcardbody, productsCardFooter);

  productcardbody.appendChild(productImg);

  productsCardFooter.prepend(productBtn);

  productsCardFooter.prepend(productdesc);

  productsCardFooter.prepend(productPrice);

  productsCardFooter.prepend(productTitle);

  // productsCard.append(productcardbody, productsCardFooter);

  return productsCard;
}


let categoryProducts = products.filter((pr) => pr.category == category);

categoryProducts.map((product) => {
  let card = getProductCard(product);
  CatalogMenu.append(card);
});
