export default function clickBurgerButton() {
  const burgerButton = document.querySelector('.burger-button');
  const burgerButtonItems = Array.from(document.querySelectorAll('.burger-button__item'));
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerMenuItems = Array.from(document.querySelectorAll('.burger-menu__item'));
  const body = document.querySelector('body');

  burgerButton.classList.toggle('burger-button_close');
    burgerButtonItems.forEach(element => {
      element.classList.toggle('burger-button_close__item');
    });
    burgerMenu.classList.toggle('burger-menu_open');
    burgerMenuItems.forEach(element => {
      element.classList.toggle('burger-menu_open__item');
      element.addEventListener('click', clickMenuItem);
    });
    body.classList.toggle('showOnlyHeader');
}

import clickMenuItem from './clickMenuItem';