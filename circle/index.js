var NUM = 2;

function createParticles() {
  var particles = [];
  var maxNumberOfOverlappingTries = 0;
  for(var i = 0; i < NUM; i++) {
    var radius = random(10, 25);
    var x = Math.random() * (WINDOW_WIDTH - radius * 2) + radius;
    //var y = Math.random() * (WINDOW_HEIGHT - radius * 2) + radius;
    var y = 300;

    if(i > 0) {
      for(var j = 0; j < particles.length; j++) {
        var dSq = distanceSq({ x: x, y: y }, particles[j].position) ;
        if(dSq < (radius + particles[j].radius) * (radius + particles[j].radius)) {
          x = Math.random() * (WINDOW_WIDTH - radius * 2) + radius;
          //y = Math.random() * (WINDOW_HEIGHT - radius * 2) + radius;

          j = -1;
        }

        maxNumberOfOverlappingTries++;
      }

      if(maxNumberOfOverlappingTries > 8000) break;
    }

    var particle= new Particle(x, y, radius, ctx);
    particle.addMass(5)
    particles.push(particle);
  }

  return particles;
}


function loop() {

  var particles = createParticles();
  
  function draw() {
    ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    for(var i = 0; i < particles.length; i++) {
      particles[i].draw();
      particles[i].update();
      console.log(particles[i].velocity.x)
      for(j = 0; j < particles.length; j++) {
        if(i === j) continue;
        else {
          particles[i].checkCollision(particles[j])
        }
      }
    }
  }


  setInterval(draw, 1000/60);
}

loop();

