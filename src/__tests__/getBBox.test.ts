import { getCircleBBox } from '../getBBox';
import { IBox } from '../type';

describe('圆形的包围盒', () => {
  test('普通情况', () => {
    expect(getCircleBBox({ x: 0, y: 0, radius: 20 })).toStrictEqual<IBox>({
      x: -20,
      y: -20,
      width: 40,
      height: 40,
    });
  });
});
