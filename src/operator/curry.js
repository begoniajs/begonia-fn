
export default function curry(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('The first param of curry should be expected function type.');
  }

  function o(params) {
    return function(...args) {
      let ary = params.concat(args);
      if (ary.length >= fn.length) {
        return fn.apply(this, ary);
      }

      return o(ary);
    };
  };

  return o([]);
};
