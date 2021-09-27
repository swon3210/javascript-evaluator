import { $result } from './elements.js';

const UI = {
  formula: '',
};

export const UIProxy = new Proxy(UI, {
  set(obj, prop, value) {
    if (typeof value !== 'string') {
      return false;
    }

    if (value === '') {
      $result.innerText = '0';
    } else {
      $result.innerText = value;
    }

    obj[prop] = value;

    return true;
  },
});
