function Particle(radius, initX, initY) {

  this.r = new p5.Vector(initX, initY);
  this.v = new p5.Vector(random(-3, 3), random(-3, 0));
  this.a = new p5.Vector(0, 0);

  this.radius = radius;

  this.lifeRemaining = 255;

}

Particle.prototype.gen = function() {

  stroke(255, this.lifeRemaining);
  fill(255, this.lifeRemaining);
  ellipse(this.r.x, this.r.y, this.radius)

  this.lifeRemaining -= 5;

  if (this.r.x > width) {
    this.r.x = 0;
  }

  if (this.r.x < 0) {
    this.r.x = width;
  }

}

Particle.prototype.applyForce = function(force) {

  this.a.add(force);
  this.v.add(this.a);
  this.r.add(this.v);

  this.a.mult(0); // reset acceleration

}

Particle.prototype.isDead = function() {
  if (this.lifeRemaining <= 0) {
    return true;
  } else {
    return false;
  }
}
