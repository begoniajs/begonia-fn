/**
 * 
 */
export default function compose(...args) {
  let fnList = args;

  return function(...args) {
    let result = args;
    let len = fnList.length;
    while (len--) {
      let fn = fnList[len];

      if (typeof fn === 'function') {
        result = fn.apply(null, result);
        result = [result];
      }
    }
    return result[0];
  }
};
