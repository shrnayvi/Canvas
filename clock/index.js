var canvas = document.getElementById('canvas');

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var PI = Math.PI;
canvas.width = WIDTH;
canvas.height = HEIGHT;

var radius = HEIGHT / 2 * 0.95;

var ctx = canvas.getContext('2d');

function clockHand(from, to) {
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#333';
  ctx.stroke();
}

ctx.translate(WIDTH / 2, HEIGHT / 2);

function clock() {
  var now = new Date();


  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.02, 0, PI * 2);
  ctx.fillStyle = '#333';
  ctx.fill();

  ctx.save();
  ctx.rotate(-PI / 2);

  //hour marks
  for(var i = 1; i <= 12; i++) {
    ctx.save();
    ctx.rotate(i * PI / 6);
    ctx.translate(radius * 0.95, 0);
    ctx.rotate(-i * PI / 6);
    ctx.rotate(PI / 2);
    ctx.fillText(i, 0, 0);
    ctx.restore();
  }

  ctx.restore();

  var hour = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  hour = hour > 12 ? hour - 12 : hour;


  //second hand
  ctx.save();
  ctx.rotate(- PI / 2);
  ctx.rotate(seconds * PI / 30);
  clockHand({ x: 0, y: 0 }, { x: radius * 0.9, y: 0 })
  ctx.restore();

  //minute hand
  ctx.save();
  ctx.rotate(- PI / 2);
  ctx.rotate(minutes * PI / 30);
  clockHand({ x: 0, y: 0 }, { x: radius * 0.75, y: 0 })
  ctx.restore();

  //hour hand
  ctx.save();
  ctx.rotate(- PI / 2);
  ctx.rotate(PI * hour / 6 + minutes * PI / 360);
  clockHand({ x: 0, y: 0 }, { x: radius * 0.6, y: 0 })
  ctx.restore();
}


setInterval(clock, 1000);
