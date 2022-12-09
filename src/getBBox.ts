import { IBox, ICircle } from './type';

/**
 * 圆形的包围盒
 */
export function getCircleBBox(circle: ICircle): IBox {
  const { x, y, radius } = circle;
  const d = radius * 2;
  return {
    x: x - radius,
    y: y - radius,
    width: d,
    height: d,
  };
}
