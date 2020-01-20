function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.mass = random(1, 3);
  this.velocity = {
    x: random(-1, 1),
    y: random(-1, -1),
  }


	this.strokeColor = STROKE_COLORS[Math.floor(Math.random() * STROKE_COLORS.length)]
	this.fillColor = FILL_COLORS[Math.floor(Math.random() * FILL_COLORS.length)]

  this.drawCircle = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, TWO_PI, false);
    ctx.strokeStyle = this.strokeColor;
    ctx.stroke();
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }

  this.changeStrokeColor = function(strokeColor) {
    this.strokeColor = strokeColor;
  }

  this.changeFillColor = function(fillcolor) {
    this.fillColor = fillColor;
  }

  this.autoMovement = function() {
    this.x = this.x + this.velocity.x;
    this.y = this.y - this.velocity.y;
    if(this.x > WINDOW_WIDTH - this.radius || this.x < this.radius) {
      this.velocity.x= -this.velocity.x;
    }

    if(this.y > WINDOW_HEIGHT- this.radius || this.y < this.radius) {
      this.velocity.y = -this.velocity.y;
    }

    this.drawCircle();
  }

  this.collides = function(c) {
    var dist = distance(this, c);
    if(dist < this.radius + c.radius) {
      return true;
    }
    return false;
  }

  this.changeVelocity = function(velocity) {
    this.velocity = velocity;
  }

}
