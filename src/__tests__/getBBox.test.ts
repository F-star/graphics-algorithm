import { getCircleBBox, getRectBBox } from '../getBBox';
import { IBox } from '../type';

describe('圆形的包围盒', () => {
  test('单个圆的包围盒', () => {
    expect(getCircleBBox({ x: 0, y: 0, radius: 20 })).toStrictEqual<IBox>({
      x: -20,
      y: -20,
      width: 40,
      height: 40,
    });
  });
  test('多个圆的包围盒', () => {
    expect(
      getCircleBBox(
        { x: 20, y: 20, radius: 20 },
        { x: 100, y: 100, radius: 50 }
      )
    ).toStrictEqual<IBox>({
      x: 0,
      y: 0,
      width: 150,
      height: 150,
    });
  });
});

describe('矩形的包围盒', () => {
  test('单个矩形', () => {
    expect(
      getRectBBox({ x: 0, y: 0, width: 50, height: 50 })
    ).toStrictEqual<IBox>({ x: 0, y: 0, width: 50, height: 50 });
  });
  test('多个矩形', () => {
    expect(
      getRectBBox(
        { x: 0, y: 0, width: 50, height: 50 },
        { x: 100, y: 100, width: 100, height: 100 }
      )
    ).toStrictEqual<IBox>({
      x: 0,
      y: 0,
      width: 200,
      height: 200,
    });
  });
});
