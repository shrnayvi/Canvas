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

    if(this.y >= HEIGHT - radius) {
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

