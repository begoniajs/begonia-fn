
/**
 * Functor容器
 */
export declare class Functor {
  /**
   * @public
   * @description 构造函数
   * @param value {any} [optional] 值
   */
  constructor(value: any);
  /**
   * @public
   * @static
   *
   * @description 吸收参数值，创建新的容器
   * @param value {any} [optional] 值
   * @returns {Functor} 新的容器
   */
  static of(value: any): Functor;
  /**
   * @public
   *
   * @description 将指定的函数应用于值，然后返回新的容器
   * @param fn {(value: any) => any} [required]
   * @returns {Functor} 容器对象
   */
  map(fn: (value: any) => any): Functor;
  /**
   * @public
   *
   * @description 返回容器中的值
   * @returns {any} 容器中的值
   */
  value(): any;
}

declare interface IEither {
  /**
   * @public
   *
   * @description 将指定的函数应用于值，然后返回新的容器
   * @param fn {(value: any) => any} [required]
   * @returns {IEither} 容器对象
   */
  map(fn: (value: any) => any): IEither;
  /**
   * @public
   * @description 返回容器中的值
   */
  readonly value: any;
  /**
   * @public
   *
   * @description 合并容器，返回容器中的值
   * @returns {any} 容器中的值
   */
  join(): any;
  /**
   * @public
   *
   * @description 将处理错误值的函数应用到错误容器中的值，以便处理
   * @param {*} fn [required] 处理错误的函数
   */
  orElse(fn: (value: any) => any): IEither;
}

declare class Left implements IEither {
  /**
   * @public
   *
   * @description 将指定的函数应用于值，然后返回新的容器
   * @param fn {(value: any) => any} [required]
   * @returns {IEither} 容器对象
   */
  map(fn: (value: any) => any): IEither;
  /**
   * @public
   * @description 返回容器中的值
   */
  readonly value: any;
  /**
   * @public
   *
   * @description 合并容器，返回容器中的值
   * @returns {any} 容器中的值
   */
  join(): any;
  /**
   * @public
   *
   * @description 将处理错误值的函数应用到错误容器中的值，以便处理
   * @param {*} fn [required] 处理错误的函数
   */
  orElse(fn: (value: any) => any): IEither;
  /**
   * @public
   * @description 此IEither实例对象是否是Left对象实例
   */
  readonly isLeft: boolean;
}

declare class Right implements IEither {
  /**
   * @public
   *
   * @description 将指定的函数应用于值，然后返回新的容器
   * @param fn {(value: any) => any} [required]
   * @returns {IEither} 容器对象
   */
  map(fn: (value: any) => any): IEither;
  /**
   * @public
   * @description 返回容器中的值
   */
  readonly value: any;
  /**
   * @public
   *
   * @description 合并容器，返回容器中的值
   * @returns {any} 容器中的值
   */
  join(): any;
  /**
   * @public
   *
   * @description 将处理错误值的函数应用到错误容器中的值，以便处理
   * @param {*} fn [required] 处理错误的函数
   */
  orElse(fn: (value: any) => any): IEither;
  /**
   * @public
   * @description 此IEither实例对象是否是Right对象实例
   */
  readonly isRight: boolean;
}

/**
 * Either容器
 */
export declare class Either {
  /**
   * @description 创建Either容器
   * @param value {any} [optaional] 值
   */
  constructor(value: any);
  /**
   * @public
   * @static
   *
   * @description 接受一个值并返回新的容器
   * @param {any} value [opational] 值
   *
   * @return {Right | Left} 新的容器
   */
  static of(value: any): IEither;
  /**
   * @public
   * @static
   *
   * @description 返回一个承载错误信息的容器
   * @param {any} value [required] 错误值
   * @return {Left} 存放错误值的容器
   */
  static left(value: any): IEither;
  /**
   * @public
   * @static
   *
   * @description 返回一个存放正确值的容器
   * @param {any} value [required] 正确的值
   */
  static right(value: any): IEither;
}

/**
 * Maybe容器
 */
export declare class Maybe {
  /**
   * @public
   * @description 创建Maybe容器
   * @param value {any} [optional] 值
   */
  constructor(value: any);
  /**
   * @public
   * @static
   *
   * @description 吸收输入参数，返回新的Maybe容器
   * @param value {any} [optional] 值
   * @returns {Maybe} 新的Maybe容器
   */
  static of(value: any): Maybe;
  /**
   * @public
   *
   * @description 将容器中的值应用到指定的函数中，返回新创建的容器
   * @param fn {(value: any) => any} [required] 指定函数
   * @returns {Maybe} 新的Maybe容器
   */
  map(fn: (value: any) => any): Maybe;
  /**
   * @public
   *
   * @description 合并容器，并从中取出值
   * @returns {any} 容器中的值
   */
  join(): any;
  /**
   * @public
   *
   * @description 返回容器中的值
   * 此方法并不会合并容器，只是单纯返回值
   * @returns {any} 容器中的值
   */
  value(): any;
}

/**
 * IO容器
 */
export declare class IO {
  /**
   * @public
   * @description 创建IO容器
   * @param value {any} [required] 值
   */
  constructor(value: any);
  /**
   * @public
   * @static
   *
   * @description 吸收输入参数，返回新的IO容器
   * @param value {any} [required] 值
   * @returns {IO} 新的IO容器
   */
  static of(value: any): IO;
  /**
   * @public
   * @static
   *
   * @description 使用指定的函数作为effect函数，创建新的容器
   * @param fn {(...args: any[]) => any} [required] 指定的函数
   * @returns {IO} 新的IO容器
   */
  static from(fn: (...args: any[]) => any): IO;

  /**
   * @public
   *
   * @description 执行容器中的effect函数，并将结果作为参数应用于指定函数。
   * @param fn {(value: any) => any} [required] 指定的函数
   * @returns {IO} 新的IO容器
   */
  map(fn: (value: any) => any): IO;
  /**
   * @public
   *
   * @description 执行容器内的effect函数，如果函数有返回值则返回计算后的值。
   * @returns {any}
   */
  run(): any;
}
