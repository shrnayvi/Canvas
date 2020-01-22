function Vector(x, y) {
  this.x = x;
  this.y = y;

  this.update = function(x, y) {
    this.x = x; 
    this.y = y; 
  }

  this.mult = function(scaleFactor) {
    this.x *= scaleFactor;
    this.y *= scaleFactor;
  }

  this.add = function(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }
}

