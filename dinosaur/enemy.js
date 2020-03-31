function Enemy(size, position) {
  this.size = new Vector(size.width, size.height);
  this.position = new Vector(position.x, position.y);

  this.draw = function(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  this.update = function(newPosition) {
    this.position.add(-4, 0);
    if(newPosition) {
      this.position = new Vector(WINDOW_WIDTH - this.size.x + (newPosition.x || 0), ENEMY_HEIGHT + (newPosition.y || 0));
    }
  }
}

