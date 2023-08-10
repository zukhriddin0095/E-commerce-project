const katalogRow = document.querySelector(".katalog__row");

function getKatalogCard(categories) {
  const katalogCard = document.createElement("div");
  katalogCard.className = "katalog__card";

  const katalogImg = document.createElement("img");
  katalogImg.src = categories.image;

  const katalogTitle = document.createElement("div");
  katalogTitle.className = "katalog__title";

  const kategoryName = document.createElement("h5");
  kategoryName.innerHTML = `<a href="../categories1440.html">${categories.name}</a>`;

  katalogCard.append(katalogImg, katalogTitle);

  katalogTitle.appendChild(kategoryName);

 
  return katalogCard;
}

// getKatalogCard(categories);

categories.map((katalog) => {
  let card = getKatalogCard(katalog);
  katalogRow.append(card);
});
