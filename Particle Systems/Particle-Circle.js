function Circle(radius, rx = 0, ry = 0) {

  Particle.call(this, rx, ry);

  this.radius = radius;

}

Circle.prototype = Object.create(Particle.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.gen = function() {

  noStroke();
  fill(255, this.lifeRemaining);
  ellipse(this.r.x, this.r.y, this.radius);

}
