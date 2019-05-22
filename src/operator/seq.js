import noop from '../internal/noop.js';
import isFunction from '../internal/isFunction';

export default (...fnList) => (fnList.length <= 0)
  ? noop
  : value => fnList.forEach(item => isFunction(item) && item(value));

