var circles = [];

  var radius = 50;
for(var i = 0; i < 2; i++) {
  //var radius = random(10, 25);
  var x = Math.random() * (WINDOW_WIDTH - radius * 2) + radius;
  //var y = Math.random() * (WINDOW_HEIGHT - radius * 2) + radius;
  var y = 500;

	if(i > 0) {
    for(var j = 0; j < circles.length; j++) {
      var dSq = distanceSq({ x: x, y: y }, circles[j]) ;
      if(dSq <= (radius + circles[j].radius) * (radius + circles[j].radius)) {
        x = Math.random() * (WINDOW_WIDTH - radius * 2) + radius;
        //y = Math.random() * (WINDOW_HEIGHT - radius * 2) + radius;
        y = 500;
        j = -1;
      }
    }
	}

  var circle = new Circle(x, y, radius);
  circle.addMass((i + 1) * 10)
  circles.push(circle);
}

function getCollidedVelocity(c1, c2) {
  var dm = c1.mass - c2.mass;
  var massSum = c1.mass + c2.mass;  

  //var theta = Math.atan2(c2.y - c1.y, c2.x - c1.x);

  //ctx.rotate(-theta);

  var v1x = ( (dm * c1.velocity.x)+ (2 * c2.mass * c2.velocity.x) ) / massSum;
  var v2x = ( (-dm * c2.velocity.x)+ (2 * c1.mass * c1.velocity.x) ) / massSum;

  
  //ctx.rotate(theta);

  var v1 = { x: v1x, y: c1.velocity.y };
  var v2 = { x: v2x, y: c2.velocity.y };

  return { v1: v1, v2: v2 };
}

function draw() {
  ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
  for(var i = 0; i < circles.length; i++) {
    circles[i].drawCircle();
    circles[i].autoMovement();
    for(var j = 0; j < circles.length; j++) {
      if(i !== j && circles[i].collides(circles[j])) {
        var velocity = getCollidedVelocity(circles[i], circles[j]);
        console.log(velocity);

        circles[i].changeVelocity(velocity.v1);
        circles[j].changeVelocity(velocity.v2);
      }
    }
  }
}

setInterval(draw, 1000/60);
