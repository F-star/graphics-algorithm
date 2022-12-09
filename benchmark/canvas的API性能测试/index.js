const count = 1000000;

// 普通对象设置耗时
let start = new Date();
const obj = { lineWidth: 0 };
for (let i = 0; i < count; i++) {
  obj.lineWidth = 5;
}
console.log('普通对象设置 lineWidth 10^6:', new Date() - start);

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 设置合法 lineWidth
start = new Date();
for (let i = 0; i < count; i++) {
  ctx.lineWidth = 5;
}
console.log('ctx 设置合法 lineWidth 10^6:', new Date() - start);

// 设置非法值
start = new Date();
for (let i = 0; i < count; i++) {
  ctx.lineWidth = 'hello!';
}
console.log('ctx 设置非法 lineWidth 10^6:', new Date() - start);
