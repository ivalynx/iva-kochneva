export default function checkWindowSize(burgerButton) {
  if( window.innerWidth < 768 ) {
    burgerButton.hidden = false;
    burgerButtonIsClikable(burgerButton);
  } else {
    burgerButton.hidden = true;
  }
}
import burgerButtonIsClikable from './burgerButtonIsClikable';