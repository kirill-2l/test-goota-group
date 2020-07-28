const headerWrapper = document.querySelector(".header__wrapper");

const activateMenu = (event) => {
    const targetEl = event.target;
    const menuItem = targetEl.closest(".d-menu__item");

    if (!menuItem) return;

    const subMenu = menuItem.querySelector(".d-menu__submenu");

    if (!subMenu) return;

    const subMenuWrapper = subMenu.firstElementChild;
    const rect = menuItem.getBoundingClientRect();

    headerWrapper.classList.add("header__wrapper--active");

    subMenuWrapper.style.left = `${rect.x}px`;

    subMenu.classList.add("d-menu__submenu--active");
};

const deactivateMenu = () => {
    const subMenus = document.querySelectorAll(".d-menu__submenu");
    subMenus.forEach((submenu) => {
        submenu.classList.contains("d-menu__submenu--active")
            ? submenu.classList.remove("d-menu__submenu--active")
            : submenu;
    });
    headerWrapper.classList.remove("header__wrapper--active");
};

const menu = document.querySelector(".d-menu");
menu.addEventListener("mouseover", activateMenu);
menu.addEventListener("mouseout", deactivateMenu);
