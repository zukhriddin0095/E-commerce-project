const productsRow = document.querySelector(".products-row");

const searchInut = document.querySelector(".search__input");

const totalProducts = document.querySelector(".products-total");

let search = "";

function getProductCard({ id, images, name, description, price }) {
  const productsCard = document.createElement("div");

  productsCard.className = "products__card";

  const productcardbody = document.createElement("div");

  productcardbody.className = "product__card__body";

  const productImg = document.createElement("img");

  productImg.src = images[0];

  productImg.alt = name;

  const productsCardFooter = document.createElement("products__Card__Footer");

  productsCardFooter.className = "products__Card__Footer";

  const productTitle = document.createElement("h3");

  const productTitleText = document.createTextNode(products.name);

  productTitle.appendChild(productTitleText);

  const productPrice = document.createElement("p");

  const productdesc = document.createElement("p");

  productdesc.className = "product__descreption";

  productdesc.textContent = description;

  productPrice.textContent = price + " ₽";

  const productBtn = document.createElement("button");

  productBtn.innerHTML = "Add to the card";
  productBtn.addEventListener("click", () => {
    addToCard(id);
  });

  productsCard.append(productcardbody, productsCardFooter);

  productcardbody.appendChild(productImg);

  productsCardFooter.prepend(productBtn);

  productsCardFooter.prepend(productdesc);

  productsCardFooter.prepend(productPrice);

  productsCardFooter.prepend(productTitle);

  // productsCard.append(productcardbody, productsCardFooter);

  return productsCard;
}

function getproducts() {
  let result = products.filter((pr) => pr.name.toLowerCase().includes(search));

  totalProducts.textContent = result.length;

  productsRow.innerHTML = "";

  if (result.length !== 0) {
    result.map((pr) => {
      let card = getProductCard(pr);
      productsRow.append(card);
    });
  } else {
    productsRow.innerHTML = `<div class="no__products"> No Products: UNDIFINED </div>`;
  }
}

getproducts();

searchInut.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  getproducts();
});

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