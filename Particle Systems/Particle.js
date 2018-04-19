function Particle(rx = 0, ry = 0) {

  this.r = new p5.Vector(rx, ry);
  this.v = new p5.Vector(random(-3, 3), random(-3, 0));
  this.a = new p5.Vector(0, 0);

  this.lifeRemaining = 255;

}

Particle.prototype.applyForce = function(force) {

  this.a.add(force);

}

Particle.prototype.sprinkle = function() {

  this.v.add(this.a);
  this.r.add(this.v);

  this.a.mult(0); // reset acceleration

  this.lifeRemaining -= 3;

}

Particle.prototype.isDead = function() {
  if (this.lifeRemaining > 0) {
    return false;
  } else {
    return true;
  }
}
