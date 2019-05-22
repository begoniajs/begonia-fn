import noop from '../internal/noop';
import isFunction from '../internal/isFunction';

export default function fork(joinFn, fn1, fn2) {
  let join = isFunction(joinFn) ? joinFn : noop;
  fn1 = isFunction(fn1) ? fn1 : noop;
  fn2 = isFunction(fn2) ? fn2 : noop;

  return function(value) {
    return join(fn1(value), fn2(value));
  };
}
