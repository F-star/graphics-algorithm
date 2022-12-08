import { isPointInCircle, isPointInRect } from '../isPointInShape';

describe('点是否在矩形内', () => {
  test('在矩形内', () => {
    expect(
      isPointInRect({ x: 10, y: 10 }, { x: 0, y: 0, width: 100, height: 100 })
    ).toBe(true);
  });
  test('在矩形左上角', () => {
    expect(
      isPointInRect({ x: -1, y: -1 }, { x: 0, y: 0, width: 100, height: 100 })
    ).toBe(false);
  });
  test('在矩形右下角', () => {
    expect(
      isPointInRect({ x: 200, y: 200 }, { x: 0, y: 0, width: 100, height: 100 })
    ).toBe(false);
  });
  test('在矩形边界上', () => {
    expect(
      isPointInRect({ x: 0, y: 100 }, { x: 0, y: 0, width: 100, height: 100 })
    ).toBe(true);
  });
});

describe('点是否在圆形内', () => {
  test('在圆形内', () => {
    expect(isPointInCircle({ x: 10, y: 10 }, { x: 0, y: 0, radius: 100 })).toBe(
      true
    );
  });
  test('在圆形外', () => {
    expect(
      isPointInCircle({ x: 110, y: 110 }, { x: 0, y: 0, radius: 100 })
    ).toBe(false);
  });
  test('在圆形边界上', () => {
    expect(isPointInCircle({ x: 0, y: 100 }, { x: 0, y: 0, radius: 100 })).toBe(
      true
    );
  });
});
