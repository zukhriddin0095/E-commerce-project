const productsRow = document.querySelector(".products-row");
const searchInput = document.querySelector(".search-input");
const totalProducts = document.querySelector(".total-products");

let search = "";

function getProductCard(pr) {
  return `
    <div class="product-card">
      <div class="product-card-body">
        <img
          src="${pr.images[0]}"
          alt="${pr.name}"
        />
      </div>
      <div class="product-card-footer">
        <h3><a href="product.html">${pr.name}</a></h3>
        <p> ${pr.description} </p>
        <p><i> ${pr.price} </i></p>
        <button><b> Add to the cart </b></button>
      </div>
    </div>
  `;
}

function getProducts() {
  let results = products.filter(
    (pr) =>
      pr.name.toLowerCase().includes(search) ||
      pr.description.toLowerCase().includes(search)
  );

  totalProducts.textContent = results.length;

  productsRow.innerHTML = "";

  if (results.length !== 0) {
    results.map((pr) => {
      productsRow.innerHTML += getProductCard(pr);
    });
  } else {
    productsRow.innerHTML = `<div>
      No products: UNDIFINED
    </div>`;
  }
}

getProducts();

searchInput.addEventListener("keyup",function () {
  search = this.value.trim().toLowerCase();
  getProducts();
});
