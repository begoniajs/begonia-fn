import isArray from '../internal/isArray.js';
import isObject from '../internal/isObject.js';
import { reduceRightObj } from '../internal/reduceObj.js';
import { reduceRightAry } from '../internal/reduceAry.js';

export default function reduceRight(list, fn, accumulator, scope) {
  if (!list || !typeof fn === 'function') {
    return list;
  }

  return isObject(list)
    ? reduceRightObj(list, fn, accumulator, scope)
    : isArray(list)
      ? reduceRightAry(list, fn, accumulator, scope)
      : list;
};
