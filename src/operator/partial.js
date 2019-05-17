import { _ } from '../internal/common.js';

export default function partial(fn, ...rest1) {
  if (typeof fn !== 'function') {
    throw new TypeError('The first param of partial should be expected function type.');
  }
  let postion = 0;

  return function(...rest2) {
    let args = [];
    for (let value of rest1) {
      args[args.length] = value && value === _ ? rest2[postion++] : value;
    }

    if (postion < rest2.length) {
      args = args.concat(rest2.slice(postion));
    }

    return fn.apply(this, args);
  };
};
