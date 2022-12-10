import { IBox, ICircle, INoEmptyRectArray } from './type';

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

/**
 * 求多个矩形组成的包围盒
 */
export function getRectBBox(...rects: INoEmptyRectArray): IBox {
  const first = rects[0];
  let x = first.x;
  let y = first.x;
  let x2 = x + first.width;
  let y2 = y + first.height;
  for (let i = 1, len = rects.length; i < len; i++) {
    const rect = rects[i];
    if (rect.x < x) {
      x = rect.x;
    }
    if (rect.y < y) {
      y = rect.y;
    }
    const _x2 = rect.x + rect.width;
    if (_x2 > x2) {
      x2 = _x2;
    }
    const _y2 = rect.y + rect.height;
    if (_y2 > y2) {
      y2 = _y2;
    }
  }
  return {
    x,
    y,
    width: x2 - x,
    height: y2 - y,
  };
}
