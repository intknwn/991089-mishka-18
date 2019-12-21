var menuToggle = document.querySelector(".page-header__main-nav-toggle");
var menu = document.querySelector(".main-nav");

menu.classList.add("main-nav--hidden");
menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menu.classList.contains("main-nav--hidden")) {
    menu.classList.remove("main-nav--hidden");
    menuToggle.classList.add("page-header__main-nav-toggle--close");
  } else {
    menu.classList.add("main-nav--hidden");
    menuToggle.classList.remove("page-header__main-nav-toggle--close");
  }
});
