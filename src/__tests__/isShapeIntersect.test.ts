import {
  isCircleIntersect,
  isRectContain,
  isRectIntersect,
} from '../isShapeIntersect';

describe('两圆是否相交', () => {
  test('普通相交', () => {
    expect(
      isCircleIntersect(
        { x: 10, y: 10, radius: 50 },
        { x: 50, y: 50, radius: 20 }
      )
    ).toBe(true);
  });
  test('不相交', () => {
    expect(
      isCircleIntersect(
        { x: 0, y: 0, radius: 50 },
        { x: 200, y: 100, radius: 20 }
      )
    ).toBe(false);
  });
  test('包含关系', () => {
    expect(
      isCircleIntersect(
        { x: 0, y: 0, radius: 60 },
        { x: 10, y: 10, radius: 20 }
      )
    ).toBe(true);
  });
  test('外切', () => {
    expect(
      isCircleIntersect({ x: 0, y: 0, radius: 60 }, { x: 70, y: 0, radius: 10 })
    ).toBe(true);
  });
});

describe('两矩形是否相交（包括包含关系）', () => {
  test('普通相交', () => {
    expect(
      isRectIntersect(
        { x: 0, y: 0, width: 100, height: 100 },
        { x: 50, y: 50, width: 100, height: 100 }
      )
    ).toBe(true);
  });
  test('不相交', () => {
    expect(
      isRectIntersect(
        { x: 0, y: 0, width: 100, height: 100 },
        { x: 500, y: 500, width: 100, height: 100 }
      )
    ).toBe(false);
  });
  test('包含关系', () => {
    expect(
      isRectIntersect(
        { x: 0, y: 0, width: 100, height: 100 },
        { x: 10, y: 10, width: 50, height: 50 }
      )
    ).toBe(true);
  });
  test('边界外切', () => {
    expect(
      isRectIntersect(
        { x: 0, y: 0, width: 100, height: 100 },
        { x: 100, y: 0, width: 100, height: 100 }
      )
    ).toBe(true);
  });
  test('边界内切', () => {
    expect(
      isRectIntersect(
        { x: 0, y: 0, width: 100, height: 100 },
        { x: 50, y: 20, width: 50, height: 50 }
      )
    ).toBe(true);
  });
});

describe('矩形 1 是否包含矩形 2', () => {
  test('非包含的普通相交', () => {
    expect(
      isRectContain(
        { x: 0, y: 0, width: 100, height: 100 },
        { x: 50, y: 50, width: 100, height: 100 }
      )
    ).toBe(false);
  });
  test('不相交', () => {
    expect(
      isRectContain(
        { x: 0, y: 0, width: 100, height: 100 },
        { x: 500, y: 500, width: 100, height: 100 }
      )
    ).toBe(false);
  });
  test('Rect 1 包含 Rect 2 关系', () => {
    expect(
      isRectContain(
        { x: 0, y: 0, width: 100, height: 100 },
        { x: 10, y: 10, width: 50, height: 50 }
      )
    ).toBe(true);
  });
  test('Rect 1 被 Rect 2 包含', () => {
    expect(
      isRectContain(
        { x: 10, y: 10, width: 50, height: 50 },
        { x: 0, y: 0, width: 100, height: 100 }
      )
    ).toBe(false);
  });
});
