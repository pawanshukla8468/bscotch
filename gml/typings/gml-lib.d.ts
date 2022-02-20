/**
 * @file Borrowing types from core JavaScript types,
 * e.g. from [Typescript ES5](https://github.com/microsoft/TypeScript/blob/main/lib/lib.es5.d.ts)
 *
 * (not using any defaults since GML doesn't match JavaScript *that* closely)
 */

declare type Function = (...args: any[]) => any;

declare type Record<K extends keyof any, T> = {
  [P in K]: T;
};

declare interface Boolean {
  valueOf(): boolean;
}

declare interface Number {
  valueOf(): number;
}

declare interface Array<T> {
  readonly kind: unique symbol;
  valueOf(): T[];
}

declare interface Object {
  [key: string]: any;
}

declare interface RegExp {}

declare interface String {
  valueOf(): string;
}

declare interface IArguments {}

// declare interface Symbol {
//   valueOf(): symbol;
// }
