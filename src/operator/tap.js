import isFunction from '../internal/isFunction';

export default function tap(fn) {
  return function(param) {
    if (isFunction(fn)) {
      fn.call(null, param);
    }
    return param;
  };
};
