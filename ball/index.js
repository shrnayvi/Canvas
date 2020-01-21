var canvas = document.getElementById('canvas');

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

var ctx = canvas.getContext('2d');

var gravity = new Vector(0, 0.23);

function Vector(x, y) {
  this.x = x;
  this.y = y;

  this.update = function(x, y) {
    this.x = x; 
    this.y = y; 
  }

  this.scale = function(scaleFactor) {
    this.x *= scaleFactor;
    this.y *= scaleFactor;
  }

  this.add = function(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }
}

function Ball(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;

  this.initVelocity = function (x, y) {
    this.velocity = new Vector(x, y)
  };

  this.ballColor = function(color) {
    this.color = color;
  }

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }

  this.update = function() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    console.log(this.y, this.velocity.y);

    if(detectGroundCollision(this)) {
      this.velocity.update(0, 0);
      this.y = HEIGHT - radius;
    } else {
      this.velocity.add(gravity);
    }
  }

  this.updateVelocity = function(x, y) {
    this.velocity.update(velocity.x, velocity.y);
  }
}

function detectGroundCollision(ball) {
  if(ball.y >= HEIGHT - radius) {
    return true;
  }
}


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
