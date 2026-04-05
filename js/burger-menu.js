const menu = document.querySelector(".burger-menu");
const openMenu = document.querySelector(".header__burger");
const closeMenu = document.querySelector(".burger-menu__btn-close");

openMenu.addEventListener("click", () => {
  menu.hidden = false;
  menu.classList.add("is-open");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("is-open");
  menu.hidden = true;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menu.classList.remove("is-open");
    menu.hidden = true;
  }
});
