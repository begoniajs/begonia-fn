/**
 * 函数防抖
 * @param {() => any} fn [required] 需要周期执行的函数
 * @param {number} time [optional] 周期时间间隔，默认为0ms
 * @returns {(...args: any[]) => void} 包装后的函数
 */
export function debounce(fn: () => any, time?: number): (...args: any[]) => void;

/**
 * 延迟函数执行
 */
export declare namespace scheduler {
  /**
   * @public
   * @description 延迟5s执行
   * @param fn {(value: any) => any} [required] 需要推迟执行的函数
   * @returns {any} 函数执行结果
   */
  function delay5(fn: (value: any) => any): any;
  /**
   * @public
   * @description 延迟10s执行
   * @param fn {(value: any) => any} [required] 需要推迟执行的函数
   * @returns {any} 函数执行结果
   */
  function delay10(fn: (value: any) => any): any;
  /**
   * @public
   * @description 延迟至指定的时间执行函数
   * @param fn {(value: any) => any} [required] 需要推迟执行的函数
   * @param times {number} [required] 需要推迟的时间
   * @returns {any} 函数执行结果
   */
  function delay(fn: (value: any) => any, times: number): any;
}

/**
 * 函数节流
 * @param {() => any} fn [required] 需要周期执行的函数
 * @param {number} time [optional] 周期时间间隔，默认为0ms
 * @returns {(...args: any[]) => void} 包装后的函数
 */
export function throttle(fn: () => any, time?:number): (...args: any[]) => void;
