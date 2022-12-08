interface IPoint {
  x: number;
  y: number;
}

interface IRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ICircle {
  x: number;
  y: number;
  radius: number;
}

export function isPointInRect(point: IPoint, rect: IRect) {
  return (
    point.x >= rect.x &&
    point.y >= rect.y &&
    point.x <= rect.x + rect.width &&
    point.y <= rect.y + rect.height
  );
}

export function isPointInCircle(point: IPoint, circle: ICircle) {
  const dx = point.x - circle.x;
  const dy = point.y - circle.y;
  const dSquare = dx * dx + dy * dy;
  return dSquare <= circle.radius * circle.radius;
}
