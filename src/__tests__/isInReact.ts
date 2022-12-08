import { isInRect } from '../isInRect';

describe('点是否在矩形内', () => {
  test('在矩形内', () => {
    expect(
      isInRect({ x: 10, y: 10 }, { x: 0, y: 0, width: 100, height: 100 })
    ).toBe(true);
  });
  test('在矩形左上角', () => {
    expect(
      isInRect({ x: -1, y: -1 }, { x: 0, y: 0, width: 100, height: 100 })
    ).toBe(false);
  });
  test('在矩形右下角', () => {
    expect(
      isInRect({ x: 200, y: 200 }, { x: 0, y: 0, width: 100, height: 100 })
    ).toBe(false);
  });
  test('在矩形边界上', () => {
    expect(
      isInRect({ x: 0, y: 100 }, { x: 0, y: 0, width: 100, height: 100 })
    ).toBe(true);
  });
});
