var canvas = document.getElementById('canvas');

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;

var ctx = canvas.getContext('2d');


var player = new Player(40, 40);

var obstacles = [];
obstacles.push(new Obstacle({ width: 20, height: 50}))


var gameOverText = new Text({ x: WINDOW_WIDTH / 2 - 120, y: 100 });
var resetText = new Text({ x: WINDOW_WIDTH / 2 - 200, y: 150 });
var gameOver = false;

function loop() {
  requestAnimationFrame(loop);
  ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT)
  ctx.beginPath();
  ctx.moveTo(0, PLAYGROUND_HEIGHT);
  ctx.lineTo(WINDOW_WIDTH, PLAYGROUND_HEIGHT);
  ctx.stroke();

  var randomDistance = random(500, 800);

  if(WINDOW_WIDTH - randomDistance > obstacles[obstacles.length - 1].position.x && !gameOver) {
    obstacles.push(new Obstacle({ width: 20, height: random(20, 50) }))
  }

  if(!gameOver) {
    player.update();
  } else {
    gameOverText.draw('Game Over', ctx);
    resetText.draw('Press any key to reset', ctx);
  }

  player.draw(ctx);


  for(var i = 0; i < obstacles.length; i++) {
    obstacles[i].draw(ctx);
    if(!gameOver) {
      obstacles[i].update();
    }
    if(obstacles[i].isBeyondLeftScreen()) {
      obstacles.splice(i, 1);
    }

    if(obstacles[i].hasCollided(player)) {
      gameOver = true;
    }
  }
}

requestAnimationFrame(loop)

document.addEventListener('keydown', function(e) {
  if(e.keyCode === 38) {
    player.jump();
  }

  if(gameOver) {
    obstacles.length = 0;
    obstacles.push(new Obstacle({ width: 20, height: random(20, 50) }));
    gameOver = false;
  }

});
