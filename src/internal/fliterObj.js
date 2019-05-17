import noop from './noop.js';

export default function filterObj(list = {}, fn = noop, scope = null) {
  let entries = Object.entries(list);
  let len = entries.length;
  let index = -1;
  let result = {};
  while (++index < len) {
    let el = entries[index];
    if (fn.apply(scope, [el[1], el[0], list])) {
      result[el[0]] = el[1];
    }
  }

  return result;
};
