var menuToggle = document.querySelector(".page-header__main-nav-toggle");
var menu = document.querySelector(".main-nav");
var orderButtons = document.getElementsByClassName("catalog-list__button");
var modal = document.querySelector(".modal");
var modalSubmit = document.querySelector(".modal__submit");

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

for (var i = 0; i < orderButtons.length; i++) {
  (function (i) {
    orderButtons[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modal.classList.remove("modal--hidden");
    })
  })(i);
}

modalSubmit.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--hidden");
});
