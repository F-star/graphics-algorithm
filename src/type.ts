export interface IPoint {
  x: number;
  y: number;
}

export interface IRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * 数组长度必须大于等于 1 的 IRect 数组
 */
export type INoEmptyRectArray = [IRect, ...IRect[]];

export type IBox = IRect;

export interface ICircle {
  x: number;
  y: number;
  radius: number;
}
