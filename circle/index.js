var circles = [];

for(var i = 0; i < 50; i++) {
  var radius = random(10, 25);
  var x = Math.random() * (WINDOW_WIDTH - radius * 2) + radius;
  var y = Math.random() * (WINDOW_HEIGHT - radius * 2) + radius;

	if(i > 0) {
    for(var j = 0; j < circles.length; j++) {
      var d = distance({ x: x, y: y }, circles[j]) ;
      if(d < radius + circles[j].radius) {
        x = Math.random() * (WINDOW_WIDTH - radius * 2) + radius;
        y = Math.random() * (WINDOW_HEIGHT - radius * 2) + radius;
        j = -1;
      }
    }
	}

  var circle = new Circle(x, y, radius);
  circles.push(circle);
}

function getCollidedVelocity(c1, c2) {
  var dm = c1.mass - c2.mass;
  var massSum = c1.mass + c2.mass;  

  var vx = (dm * c1.velocity.x) / massSum + (2 * c2.mass * c2.velocity.x) / massSum;
  var vy = (dm * c1.velocity.y) / massSum + (2 * c2.mass * c2.velocity.y) / massSum;

  return { x: vx, y: vy };
}

function animate() {
  ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
  for(var i = 0; i < circles.length; i++) {
    circles[i].drawCircle();
    circles[i].autoMovement();
    for(var j = 0; j < circles.length; j++) {
      if(i !== j && circles[i].collides(circles[j])) {
        v1 = getCollidedVelocity(circles[i], circles[j]);
        v2 = getCollidedVelocity(circles[j], circles[i]);

        circles[i].changeVelocity(v1);
        circles[j].changeVelocity(v2);
      }
    }
  }
}

setInterval(animate, 1000/60);


