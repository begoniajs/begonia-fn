
export default function tap(fn) {
  return function(param) {
    if (typeof fn === 'function') {
      fn.call(null, param);
    }
    return param;
  };
};
