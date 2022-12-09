import { ICircle, IPoint, IRect } from './type';

/**
 * 点是否在矩形中
 */
export function isPointInRect(point: IPoint, rect: IRect) {
  return (
    point.x >= rect.x &&
    point.y >= rect.y &&
    point.x <= rect.x + rect.width &&
    point.y <= rect.y + rect.height
  );
}

/**
 * 点是否在圆形中
 */
export function isPointInCircle(point: IPoint, circle: ICircle) {
  const dx = point.x - circle.x;
  const dy = point.y - circle.y;
  const dSquare = dx * dx + dy * dy;
  return dSquare <= circle.radius * circle.radius;
}
