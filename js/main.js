const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__btn-list");

menuBtn.addEventListener("click", () => {
  menuList.classList.add("menu__btn-list--open");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu__btn-list--open");
});
