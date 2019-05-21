/**
 * 函数防抖
 * @param {*} fn
 * @param {*} time
 */
export default function debounce(fn, time = 0);

export declare namespace scheduler {
  function delay5(fn: (value: any) => any): any;
  function delay10(fn: (value: any) => any): any;
  function delay(fn: (value: any) => any, times: number): any;
};
