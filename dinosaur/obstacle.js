function Obstacle(size) {
  this.size = new Vector(size.width, size.height);
  this.position = new Vector(WINDOW_WIDTH, PLAYGROUND_HEIGHT - this.size.y);
  this.fillColor = 'black';


  this.draw = function(ctx) {
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  this.update = function() {
    this.position.x -= 4;
  }

  this.isBeyondLeftScreen = function() {
    if(this.position.x + this.size.x < 0) {
      return true;
    }

    return false;
  }

  this.hasCollided = function(player) {
    var noXCollision = player.position.x + player.size.x < this.position.x || player.position.x > this.position.x + this.size.x;
    var noYCollision = player.position.y + player.size.y < this.position.y || player.position.y > this.position.y + this.size.y;

    if(noXCollision || noYCollision) {
      this.fillColor = 'black';
      return false;
    }

    this.fillColor = 'red';
    return true;
  }
}
