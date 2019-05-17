import noop from './noop.js';

export default function everyObj(list = {}, fn = noop, scope = null) {
  let entries = Object.entries(list);
  let index = -1;
  let len = entries.length;
  while (++index < len) {
    let el = entries[index];
    if (!fn.apply(scope, [el[1], el[0], list])) {
      return false;
    }
  }
  return true;
};
