const hamburger = document.querySelector(".hamburger");
const menuContainer = document.querySelector(".m-menu-container");

hamburger.addEventListener("click", function () {
    menuContainer.classList.toggle("m-menu-container--active");
});
