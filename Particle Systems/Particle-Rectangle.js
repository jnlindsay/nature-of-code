function Rectangle(width, height, rx = 0, ry = 0) {

  Particle.call(this, rx, ry);

  this.width = width;
  this.height = height;

}

Rectangle.prototype = Object.create(Particle.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.gen = function() {

  noStroke();
  fill(255, this.lifeRemaining);
  rectMode(CENTER);
  rect(this.r.x, this.r.y, this.width, this.height);

}
