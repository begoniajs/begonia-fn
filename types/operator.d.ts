/**
 * @public
 * @description 返回的函数使得对于参数value，如果运算值为真则返回，作为最终结果。
 * @param fn1 {(value: any) => boolean} [required] 检测函数1
 * @param fn2 {(value: any) => boolean} [required] 检测函数2
 * @returns {(value: any) => any} `(value: any) => any`
 */
export function alt(
  fn1: (value: any) => boolean,
  fn2: (value: any) => any
): (value: any) => any;

/**
 * @public
 * @description 将一个函数中的this与一个对象(scope)绑定，返回一个新的函数
 * @param fn {(...args: any[]) => any} [required] 函数
 * @param scope {any} [required] 要绑定的this对象
 * @param args {any[]} [optional] 其他参数
 * @returns {(...args: any[]) => any}
 */
export function bind(
  fn: (...args: any[]) => any,
  scope: any,
  ...args: any[]
): (...args: any[]) => any;

/**
 * @public
 * @description 柯里化一个函数
 * @param fn {(...args: any[]) => any} [required] 原始函数
 * @returns {(...args: any[]) => any} 返回柯里化后的函数
 */
export function curry(fn: (...args: any[]) => any): (...args: any[]) => any;

/**
 * @public
 * @description 对集合中的元素进行逐个检查，当全部返回真时every函数返回true， 否则返回false
 * @param list {object | any[]} [required] 集合
 * @param fn {(item: any, index: (number | string), list: (object | any[])) => boolean} [required] 检测函数
 * @param scope {any} 检测函数中的this指向
 * @returns {boolean}
 */
export function every(
  list: (object | any[]),
  fn: (
    item: any,
    index: (number | string),
    list: (object | any[])
  ) => boolean,
  scope?: object
): boolean;

/**
 * @public
 * @description 对集合中的元素进行逐个检查，过滤出返回值为真的元素集合。
 * @param list {object | any[]} [required] 集合
 * @param fn {(item: any, index: (number | string), list: (object | any[])) => boolean} [required] 检测函数
 * @param scope {any} 检测函数中的this指向
 * @returns {object | any[]}
 */
export function filter(
  list: (object | any[]),
  fn: (
    item: any,
    index: (number | string),
    list: (object | any[])
  ) => boolean,
  scope?: object
): object | any[];

/**
 * @public
 * @description 返回一个函数，并将函数的参数value分别传入fork函数2个参数fn1和fn2中，最后将2个函数的
 * 返回值，全部应用于fork函数的参数joinFn，最后返回运算值。
 * @param joinFn {(param1: any, param2: any) => any} [required] 最终的合并函数
 * @param fn1 {(value: any) => any} [required]
 * @param fn2 {(value: any) => any} [required]
 * @returns {(value: any) => any}
 */
export function fork(
  joinFn: (param1: any, param2: any) => any,
  fn1: (value: any) => any,
  fn2: (value: any) => any
): (value: any) => any;

/**
 * @public
 * @description 原样返回函数的参数，常用于函数组合
 * @param value {any} [required] 参数值
 * @returns {any}
 */
export function identity(value: any): any;

/**
 * @public
 * @description 遍历集合，将每个元素都应用于函数fn，并将返回值组合成新的集合返回
 * @param list {object | any[]} [required] 集合
 * @param fn {(item: any, index: number | string, list: object | any[]) => any} [required] 应用于元素的函数
 * @param scope {object} [required] 函数fn中的this指向
 * @returns {object | any[]} 新的集合
 */
export function map(
  list: (object | any[]),
  fn: (item: any, index: number | string, list: object | any[]) => any,
  scope: object
): object | any[];

/**
 * @public
 * @description 部分应用，函数吸收一部分参数作为函数fn的参数，如果参数数量
 * 少于fn的声明参数数量，则返回一个函数等待接受剩余参数。如果参数数量收集足够，
 * 则对fn进行求值并返回值。
 * @param fn {(...args: any[]) => any} [required] 原始函数
 * @returns {(...args: any[]) => any | any}
 */
export function partial(fn: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any | any;

/**
 * @public
 * @description 累加器函数，由头至尾的进行遍历
 * @param list {object | any[]} [required] 集合
 * @param fn {(prev: any, item: any, index: number | string, list: object | any[]) => any} [required] 应用于元素的函数
 * @param accumulator {any} [required] 初始值，此变量将作为函数fn的参数prev被使用
 * @param scope {object} 函数fn中的this指向
 * @returns {any}
 */
export function reduce(
  list: object | any[],
  fn: (prev: any, item: any, index: number | string, list: object | any[]) => any,
  accumulator: any,
  scope: object
): any;

/**
 * @public
 * @description 累加器函数，由尾至头的进行遍历
 * @param list {object | any[]} [required] 集合
 * @param fn {(prev: any, item: any, index: number | string, list: object | any[]) => any} [required] 应用于元素的函数
 * @param accumulator {any} [required] 初始值，此变量将作为函数fn的参数prev被使用
 * @param scope {object} 函数fn中的this指向
 * @returns {any}
 */
export function reduceRight(
  list: object | any[],
  fn: (prev: any, item: any, index: number | string, list: object | any[]) => any,
  accumulator: any,
  scope: object
): any;

/**
 * @public
 * @description 倒转数组，常用于函数组合
 * @param ary {any[]} [required] 数组
 * @returns {any[]} 新的数组
 */
export function reverse(ary: any[]): any[];

/**
 * @public
 * @description 返回一个函数，将会对传入seq函数的全部函数类型参数进行逐一求值
 * 返回的函数可以吸收一个参数
 * @returns {(value: any) => void}
 */
export function seq(...args: ((value: any) => any)[]): (value: any) => void;

/**
 * @public
 * @description 检测集合中的每个元素，当有元素被检测函数判定为真时，中断执行，返回true，否则返回false
 * @param list {object | any[]} [required] 集合
 * @param fn {(item: any, index: number | string, list: object | any[]) => boolean} [required] 应用于元素的函数
 * @param scope {object} [optional] 函数fn中的this指向
 * @returns {boolean}
 */
export function some(
  list: object | any[],
  fn: (item: any, index: number | string, list: object | any[]) => boolean,
  scope?: object
): boolean;

/**
 * @public
 * @description 返回一个函数可以吸收一个参数，并将此变量作为参数传入指定的fn函数，最后原样返回最初的参数。
 * @param fn {(value: any) => any} [required] 中间处理函数
 * @returns {(param: any) => any}
 */
export function tap(fn: (value: any) => any): (param: any) => any;
