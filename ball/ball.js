function Ball(x, y, radius) {
  this.position = new Vector(x, y);
  this.radius = radius;
  this.velocity = new Vector(0, 0);
  this.isJumping = false;

  this.setBallColor = function(color) {
    this.ballColor = color;
  }

  this.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, TWO_PI, false);
    ctx.fillStyle = this.ballColor;
    ctx.fill();
    ctx.stroke();
  }

  this.keys = {
    left: false,
    up: false,
    right: false,
  }


  this.handleKeyPress = function(e) {
    var isKeyDown = e.type === 'keydown' ? true : false;

    switch(e.keyCode) {
      case 37:
        this.keys.left = isKeyDown;
        break;
      case 38:
        this.keys.up = isKeyDown;
        break;
      case 39:
        this.keys.right = isKeyDown;
        break;
      default:
        break;
    }
  }

  this.update = function() {
    if(this.keys.right) {
      this.velocity.x = 2;
    }

    if(this.keys.left) {
      this.velocity.x = -2;
    }

    this.position.x += this.velocity.x;
    this.velocity.x *= 1 - FRICTION;
    
    if(this.keys.up && !this.isJumping) {
      this.isJumping = true;
      this.velocity.y = -20;
    }


    this.velocity.y += GRAVITY;
    this.position.y += this.velocity.y;
    this.velocity.y *= (1 - FRICTION);

    if(this.position.y >= WINDOW_HEIGHT - this.radius - SURFACE_HEIGHT) {
      this.position.y = WINDOW_HEIGHT- this.radius - SURFACE_HEIGHT;
      this.isJumping = false;
      this.velocity.y = 0;
    }

    this.checkWallCollision();
  }


  this.checkWallCollision = function() {
    if(this.position.x + this.radius >= WINDOW_WIDTH) {
      this.position.x = WINDOW_WIDTH - this.radius;
    }
    
    if(this.position.x <= this.radius) {
      this.position.x = this.radius;
    }
  }

}
