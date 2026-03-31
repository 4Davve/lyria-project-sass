const menu = document.querySelector(".slider");
const openMenu = document.querySelector(".header__burger");
const closeMenu = document.querySelector(".slider__btn-close");

openMenu.addEventListener("click", () => {
  menu.classList.add("is-open");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("is-open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menu.classList.remove("is-open");
  }
});
