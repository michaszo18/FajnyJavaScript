/* eslint-disable no-undef */
import { TO_LESS, TO_MUCH } from './constans';

export default (num, expected) => {
  if (num > expected) {
    alert(TO_MUCH);
  } else {
    alert(TO_LESS);
  }
};
