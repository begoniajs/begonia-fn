import noop from './noop.js';

export default function mapObj(obj = {}, fn = noop, scope = null) {
  let entries = Object.entries(obj);
  let len = entries.length;
  let index = -1;
  let result = {};
  while (++index < len) {
    let el = entries[index];
    result[el[0]] = fn.apply(scope, [el[1], el[0], obj]);
  }
  return result;
};
