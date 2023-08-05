const tabBtn = document.querySelectorAll("button");
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
