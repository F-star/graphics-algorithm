const canvas = document.querySelector('canvas');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const radius = 10;
const greenBallCount = 1000;

const ctx = canvas.getContext('2d');

// 返回随机坐标
function getRandPos(w, h) {
  function getRandInt(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const x = getRandInt(0 + radius, w - radius);
  const y = getRandInt(0 + radius, h - radius);
  return { x, y };
}

// 记录大量的
const greenBalls = new Array(greenBallCount);
for (let i = 0; i < greenBalls.length; i++) {
  greenBalls[i] = getRandPos(canvasWidth, canvasHeight);
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
  }
}

function drawRedBall(x, y) {
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2); // 0 为从右方为起点
  ctx.fill();
  ctx.stroke();
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

function isCircleIntersect(c, c2) {
  const dx = c.x - c2.x;
  const dy = c.y - c2.y;
  const dSquare = dx * dx + dy * dy;
  return dSquare <= (c.radius + c2.radius) * (c.radius + c2.radius);
}

function partRender(targetX, targetY) {
  // 【1】计算所有的碰撞球的位置信息
  const collisions = []; // 被碰撞的 ball 的坐标
  for (let i = 0; i < greenBalls.length; i++) {
    const { x, y } = greenBalls[i];
    // +1 是为了弥补 strokeWidth 的 1px 宽度所产生的外扩像素
    const circle = { x, y, radius: radius + 1 };

    if (
      isCircleIntersect(circle, { x: targetX, y: targetY, radius: radius + 1 })
    ) {
      collisions.push([x, y]);
    }
  }
  // console.log(collisions.length);

  // 【2】用 clip 圈定范围
  // 范围为上一次的位置到当前位置，所形成的矩形
  ctx.arc(targetX, targetY, radius + 1, 0, Math.PI * 2);
  ctx.clip();
  drawGreenBalls(collisions);
  drawRedBall(targetX, targetX);
}

// 初次渲染
drawGreenBalls(greenBalls);
