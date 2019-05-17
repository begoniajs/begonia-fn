import partial from './partial.js';

export default function bind(fn, scope, ...rest1) {
  let bindFn = function(...args) {
    return fn.apply(scope, args);
  };
  return partial.apply(this, [bindFn, ...rest1]);
};
