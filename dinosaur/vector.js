function Vector(x, y) {
  this.x = x;
  this.y = y;
}

//add constants
Vector.prototype.add = function(x, y) {
  this.x += x;
  this.y += y;
}

Vector.prototype.scale = function(xScaleFactor, yScaleFactor) {
  var vector = new Vector(this.x * xScaleFactor, this.y * yScaleFactor);
  return vector;
}

Vector.prototype.magnitude = function() {
  return Math.sqrt(this.position.x * this.position.x + this.position.y * this.position.y);
}

Vector.prototype.unitVector = function() {
  var mag = this.magnitude();
  return new Vector({ x: this.position.x / mag, y: this.position.y / mag });
}

Vector.add = function(v1, v2) {
  return new Vector({ x: v1.x + v2.x,  y: v1.y + v2.y });
}

Vector.subtract = function(v1, v2) {
  return new Vector({ x: v1.x - v2.x,  y: v1.y - v2.y });
}

