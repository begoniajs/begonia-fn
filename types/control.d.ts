/**
 * @public
 *
 * @description 按照参数的顺序从左到右的执行函数
 * 上一个函数的返回值将作为下一个函数的参数
 * @returns {any}
 */
export function pipe(...args: Array<(value: any) => any>): any;

/**
 * @public
 *
 * @description 按照参数的顺序从右到左的执行函数
 * 上一个函数的返回值将作为下一个函数的参数
 * @returns {any}
 */
export function compose(...args: Array<(value: any) => any>): any;
