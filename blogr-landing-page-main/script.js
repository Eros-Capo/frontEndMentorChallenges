const link1 = document.querySelector(".last-link a");
const link2 = document.querySelector(".last-link-2 a");
const linkMenu = document.querySelector(".link-menu");
const arrow1 = document.querySelector(".arrow");
const arrow2 = document.querySelector(".arrow-2");
const linkMenu2 = document.querySelector(".link-menu-2");
const hamburger = document.querySelector(".hamburger");
const mobileContainer = document.querySelector(".mobile-container");

hamburger.addEventListener("click", hamburgerPopUp);
window.addEventListener("resize", windowCheck);

function hamburgerPopUp() {
  mobileContainer.classList.toggle("open");
  if (mobileContainer.classList.contains("open")) {
    hamburger.src = "./images/icon-close.svg";
  } else {
    hamburger.src = "./images/icon-hamburger.svg";
  }
}

function windowCheck() {
  if (window.innerWidth >= 1030) {
    mobileContainer.classList.remove("open");
    hamburger.src = "./images/icon-hamburger.svg";
  }
}

link1.addEventListener("click", () => {
  arrow.classList.toggle("rotate");
  linkMenu.classList.toggle("open");
  linkMenu2.classList.toggle("open");
});

link2.addEventListener("click", () => {
  arrow2.classList.toggle("rotate");
  linkMenu2.classList.toggle("open");
});
