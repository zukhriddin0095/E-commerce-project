


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


//////// toggle

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
  