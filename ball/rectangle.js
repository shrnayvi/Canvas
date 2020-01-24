function Rectangle(x, y, width, height) {
  this.position = new Vector(x, y);
  this.width = width;
  this.height = height;

  this.setColor = function(color) {
    this.fillStyle = color;
  }

  this.draw = function(ctx) {
    ctx.fillStyle = this.fillStyle;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
