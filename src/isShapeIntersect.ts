import { ICircle, IRect } from './type';

/**
 * 两圆是否相交
 */
export function isCircleIntersect(circle: ICircle, circle2: ICircle) {
  const dx = circle.x - circle2.x;
  const dy = circle.y - circle2.y;
  const dSquare = dx * dx + dy * dy;
  return (
    dSquare <=
    (circle.radius + circle2.radius) * (circle.radius + circle2.radius)
  );
}

/**
 * 矩形是否相交
 */
export function isRectIntersect(rect1: IRect, rect2: IRect) {
  return (
    rect1.x <= rect2.x + rect2.width &&
    rect1.x + rect1.width >= rect2.x &&
    rect1.y <= rect2.y + rect2.height &&
    rect1.y + rect1.height >= rect2.y
  );
}

/**
 * 矩形和圆形是否相交
 */
export function isRectAndCircleIntersect(rect1: IRect, rect2: IRect) {
  // TODO:
}

/**
 * 矩形 1 是否包含矩形 2
 */
export function isRectContain(rect1: IRect, rect2: IRect) {
  return (
    rect1.x <= rect2.x &&
    rect2.y <= rect2.y &&
    rect1.x + rect1.width >= rect2.x + rect2.width &&
    rect1.y + rect1.height >= rect2.y + rect2.height
  );
}
