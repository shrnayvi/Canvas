function Particle(x, y, radius, ctx) {
  this.position = new Vector(x, y);
  this.radius = radius; 

  this.fillColor = FILL_COLORS[Math.floor(random(0, FILL_COLORS.length))];
  this.strokeColor = STROKE_COLORS[Math.floor(random(0, STROKE_COLORS.length))];

  this.addMass = function(mass) {
    this.mass = mass;
  }
  
  this.velocity = new Vector(
    random(-1, 4),
    //random(-1, 1),
    0
  );

  this.addVelocity = function(x, y) {
    this.velocity = new Vector(x, y);
  } 

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, radius, 0, TWO_PI, false);
    ctx.fillStyle = this.fillColor;
    ctx.fill();
    ctx.strokeStyle = this.strokeColor;
    ctx.stroke();
  }

  this.update = function() {
    if(this.position.x + radius >= WINDOW_WIDTH || this.position.x <= radius) {
      this.velocity.x = -this.velocity.x;
    }

    if(this.position.y + radius >= WINDOW_HEIGHT || this.position.y <= radius) {
      this.velocity.y = -this.velocity.y;
    }
    this.position.add(this.velocity);
  }

  this.checkCollision = function(particle) {
    if(this.collides(particle)) {
      var dm = this.mass - particle.mass;
      var massSum = this.mass + particle.mass;

      v1x = ((dm * this.velocity.x) + (2 * particle.mass * particle.velocity.x)) / massSum;
      v2x = ((-dm * particle.velocity.x) + (2 * this.mass * this.velocity.x)) / massSum;

      this.velocity.x = v1x;
      particle.velocity.x = v2x;
    }
  }

  this.collides = function(particle) {
    var dSq = distanceSq(this.position, particle.position);
    if(dSq <= (this.radius + particle.radius) * (this.radius + particle.radius)) {
      return true;
    }
    return false;
  }

}
