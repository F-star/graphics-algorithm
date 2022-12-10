let count = 0;
let prevTimestamp;

const span = document.createElement('span');
span.style.position = 'fixed';
span.style.right = '10px';
span.style.top = '0';
span.style.fontSize = '32px';
span.style.color = 'red';

document.body.appendChild(span);

function showFPS(fps) {
  // console.log(fps);
  setTimeout(() => {
    span.innerHTML = fps;
  });
}

function loop(timestamp) {
  if (prevTimestamp) {
    count++;
    // 间隔超过 1s，将之前计算的 count 输出
    if (timestamp - prevTimestamp >= 1000) {
      showFPS(count);
      prevTimestamp = timestamp;
      count = 0;
    }
  } else {
    prevTimestamp = timestamp;
  }
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
