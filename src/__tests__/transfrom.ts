import { transform } from '../transfrom';

describe('变换矩阵', () => {
  test('缩放', () => {
    expect(transform({ x: 1, y: 2 }, [100, 0, 0, 20, 0, 0])).toEqual({
      x: 100,
      y: 40,
    });
  });
  test('旋转', () => {
    expect(transform({ x: 1, y: 2 }, [0, 1, -1, 0, 0, 0])).toEqual({
      x: -2,
      y: 1,
    });
  });
  test('平移', () => {
    expect(transform({ x: 1, y: 2 }, [1, 0, 0, 1, 30, 40])).toEqual({
      x: 31,
      y: 42,
    });
  });
});
