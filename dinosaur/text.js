function Text(position) {
  this.position = new Vector(position.x, position.y);


  this.draw = function(text, ctx) {
    console.log('hello')
    ctx.font = '30px Ubuntu';
    ctx.fillText(text, this.position.x, this.position.y);
  }
}
