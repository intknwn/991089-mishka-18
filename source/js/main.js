function addEventsMain () {
  var menuToggle = document.querySelector(".page-header__main-nav-toggle");
  var menu = document.querySelector(".main-nav");
  var orderButton = document.querySelector(".popular-item__order-button");
  var modal = document.querySelector(".modal");
  var modalSubmit = document.querySelector(".modal__submit");

  menu.classList.add("main-nav--hidden");
  menuToggle.classList.add("page-header__main-nav-toggle--shown");
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

  orderButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal--hidden");
  });

  modalSubmit.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--hidden");
  });
}
