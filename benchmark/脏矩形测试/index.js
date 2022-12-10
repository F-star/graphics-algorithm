const canvas = document.querySelector('canvas');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const radius = 10; // 绿球半径
const redRadius = 12; // 红球半径
const greenBallCount = 3000;

const ctx = canvas.getContext('2d');

// 返回随机坐标
function getRandPos(w, h, offset) {
  function getRandInt(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const x = getRandInt(0 + offset, w - offset);
  const y = getRandInt(0 + offset, h - offset);
  return { x, y };
}

// 记录大量的
const greenBalls = new Array(greenBallCount);
for (let i = 0; i < greenBalls.length; i++) {
  greenBalls[i] = getRandPos(canvasWidth, canvasHeight, radius);
}

// 绘制大量绿色圆形
function drawGreenBalls(balls) {
  ctx.fillStyle = '#519D36'; // 绿色
  for (let i = 0; i < balls.length; i++) {
    ctx.beginPath();
    const { x, y } = balls[i];
    ctx.arc(x, y, radius, 0, Math.PI * 2); // 0 为从右方为起点
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}

let prevRedBall;

function drawRedBall(x, y) {
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(x, y, redRadius, 0, Math.PI * 2); // 0 为从右方为起点
  ctx.fill();
  // ctx.stroke();
  prevRedBall = { x, y, radius: redRadius };
}

canvas.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // 全部重渲染
  // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  // drawGreenBalls(greenBalls);
  // drawRedBall(x, y);

  // 局部重渲染
  partRender(x, y);
});

/**** 局部渲染 ****/
function partRender(targetX, targetY) {
  // 【1】计算需要重绘的区域
  // 为当前红色球和即将渲染的红色球形成的 “包围盒”
  const dirtyBox = getCircleBBox(prevRedBall, {
    x: targetX,
    y: targetY,
    radius: redRadius,
  });

  // 【2】计算所有被碰撞的绿色球
  const collisions = []; // 被碰撞的 ball 的坐标
  const redCircle = { x: targetX, y: targetY, radius: radius + 1 };
  for (let i = 0; i < greenBalls.length; i++) {
    const { x, y } = greenBalls[i];
    // +1 是为了弥补 strokeWidth 的 1px 宽度所产生的外扩像素
    const circle = { x, y, radius: radius + 1 };
    const circleBBox = getCircleBBox(circle);

    if (isRectIntersect(circleBBox, dirtyBox)) {
      collisions.push({ x, y });
    }
  }
  // console.log(collisions.length);

  // 【2】用 clip 圈定范围，进行局部绘制
  // 范围为上一次的位置到当前位置，所形成的矩形
  ctx.clearRect(dirtyBox.x, dirtyBox.y, dirtyBox.width, dirtyBox.height);
  ctx.save();
  ctx.beginPath();
  ctx.rect(dirtyBox.x, dirtyBox.y, dirtyBox.width, dirtyBox.height);
  // ctx.stroke();
  ctx.clip();
  // 只绘制被碰撞的绿球
  drawGreenBalls(collisions);
  // 再画红球
  drawRedBall(targetX, targetY);
  ctx.restore();
}

// 初次渲染
drawGreenBalls(greenBalls);
drawRedBall(100, 100);

/********** 一些图形学算法 ***********/

/**
 * 矩形是否相交
 */
function isRectIntersect(rect1, rect2) {
  return (
    rect1.x <= rect2.x + rect2.width &&
    rect1.x + rect1.width >= rect2.x &&
    rect1.y <= rect2.y + rect2.height &&
    rect1.height + rect1.y >= rect2.y
  );
}

/**
 * 计算多个圆形组成的包围盒
 */
function getCircleBBox(...circles) {
  const rects = circles.map((circle) => {
    const { x, y, radius } = circle;
    const d = radius * 2;
    return {
      x: x - radius,
      y: y - radius,
      width: d,
      height: d,
    };
  });
  return getRectBBox(...rects);
}

/**
 * 求多个矩形组成的包围盒
 */
function getRectBBox(...rects) {
  const first = rects[0];
  let x = first.x;
  let y = first.y;
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
