function Player(width, height) {
  this.size = new Vector(width, height);
  this.playerGroundPosition = PLAYGROUND_HEIGHT - this.size.y;
  this.position = new Vector(50, this.playerGroundPosition);
  this.isJumping = false;
  this.velocity = new Vector(0, 0);
  this.initialVelocity = 0;
  this.jumpingVelocity = new Vector(0, -5);
  this.fillColor = 'black';
  this.originalHeight = this.size.y;

  this.draw = function(ctx) {
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  this.jump = function() {
    if(!this.isJumping) {
      this.isJumping = true;
      this.position.add(0, -JUMP);
      this.velocity.add(0, -JUMP);
    }
  }

  this.update = function() {

    if(this.position.y >= this.playerGroundPosition) {
      this.position.y = this.playerGroundPosition;
      this.isJumping = false;
      this.velocity.y = 0;
    }

    this.velocity.add(0, GRAVITY);
    this.position.add(0, this.velocity.y);
  }

  this.hasCollided = function(enemy) {
    if(this.position.x + this.size.x >= enemy.position.x && this.position.y + this.size.y >= enemy.position.y) {
      console.log('bam collision')
    }
  }

}

