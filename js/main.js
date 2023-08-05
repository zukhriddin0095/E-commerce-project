window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// /////// aos

AOS.init();

/////////////// backtop

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrolltop");
  scroll.classList.toggle("active", window.scrollY > 500);
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

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
