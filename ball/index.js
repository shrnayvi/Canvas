var canvas = document.getElementById('canvas');

canvas.width = WIDTH;
canvas.height = HEIGHT;

var ctx = canvas.getContext('2d');


var radius = 20;
var ball = new Ball(WIDTH / 2 - radius, HEIGHT / 2 - radius, radius);
ball.ballColor('red');
ball.initVelocity(0, 1);

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ball.draw();
  ball.update();
}


setInterval(draw, 1000/60);
