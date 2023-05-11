export default function burger() {
   
  const burgerButton = document.querySelector('.burger-button');

  checkWindowSize(burgerButton);

  window.onresize = () => {
    checkWindowSize(burgerButton);
  };
}

import checkWindowSize from './checkWindowSize';