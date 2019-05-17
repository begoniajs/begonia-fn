import isArray from '../internal/isArray.js';
import isObject from '../internal/isObject.js';
import { reduceObj } from '../internal/reduceObj.js';
import { reduceAry } from '../internal/reduceAry.js';

export default function reduce(list, fn, accumulator, scope) {
  if (!list || !typeof fn === 'function') {
    return list;
  }

  return isObject(list)
    ? reduceObj(list, fn, accumulator, scope)
    : isArray(list)
      ? reduceAry(list, fn, accumulator, scope)
      : list;
};
