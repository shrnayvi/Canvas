var canvas = document.getElementById('canvas');

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;


var ctx = canvas.getContext('2d');

var radius = 30;
var surface = new Rectangle(0, WINDOW_HEIGHT - SURFACE_HEIGHT, WINDOW_WIDTH, WINDOW_HEIGHT);
surface.setColor('#C00000');

var ball = new Ball(radius, WINDOW_HEIGHT - radius - SURFACE_HEIGHT, radius);
ball.setBallColor('#FF8040');

setInterval(function() {
  ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT)
  ball.draw(ctx);
  ball.update();
  surface.draw(ctx);
}, 1000/120);

function handleKeyPress(e) {
  ball.handleKeyPress(e);
}

window.addEventListener('keydown', handleKeyPress);
window.addEventListener('keyup', handleKeyPress);
