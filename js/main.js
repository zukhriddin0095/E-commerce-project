window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// toggle

// function openNavbar() {
//   document.getElementById("navbar-responsive").style.left = "0";
//   // document.getElementById("navbar-responsive").style.top = "0";
// }
// function closeNavbar() {
//   document.getElementById("navbar-responsive").style.left = "-100%";
//   // document.getElementById("navbar-responsive").style.top = "-100%";
// }

// document.getElementById("navbar-open").addEventListener("click", openNavbar);
// document.getElementById("navbar-close").addEventListener("click", closeNavbar);

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
