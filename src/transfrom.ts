interface IVector {
  x: number;
  y: number;
}

/**
 * a c e
 * b d f
 * 0 0 1
 */
type ITransfrom = [
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
];

/**
 * 变换矩阵
 */
export function transform(
  { x, y }: IVector,
  [a, b, c, d, e, f]: ITransfrom
): IVector {
  return {
    x: x * a + y * c + e,
    y: x * b + y * d + f,
  };
}
