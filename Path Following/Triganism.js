function Triganism() {

  this.maxSpeed = 4;
  this.maxForce = 1;

  this.r = new p5.Vector(random(0, width), random(0, height));
  this.v = new p5.Vector(100, 0);
  this.a = new p5.Vector(0, 0);

  this.futureR = new p5.Vector(this.r.x, this.r.y);

}

Triganism.prototype.gen = function() {

  // constrain velocity
  this.v.x = constrain(this.v.x, -this.maxSpeed, this.maxSpeed);
  this.v.y = constrain(this.v.y, -this.maxSpeed, this.maxSpeed);

  // physics
  this.r.add(this.v);
  this.v.add(this.a);

  // teleport
  if (this.r.x > width) {
    this.r.x = 0;
  } if (this.r.x < 0) {
    this.r.x = width;
  }

  // calculate triganism vertices
  this.apos = new p5.Vector(12, 0);
  this.bpos = new p5.Vector(-12, - 5);
  this.cpos = new p5.Vector(-12, 5);

  // generate triganism
  push();
  translate(this.r.x, this.r.y);
  noStroke(0);
  fill(255);
  rotate(this.v.heading());

  triangle(this.apos.x, this.apos.y, this.bpos.x, this.bpos.y, this.cpos.x, this.cpos.y);

  this.futureR.x = this.apos.x + 50;
  this.futureR.y = this.apos.y;
  this.futureR.rotate(this.v.heading());
  ellipse(this.apos.x + 50, this.apos.y, 5)

  pop();

  // fix futureR
  this.futureR.add(this.r);

  // reset acceleration
  this.a.mult(0);

}

Triganism.prototype.applyForce = function(force) {
  this.a.add(force);
}

Triganism.prototype.steer = function(targetX, targetY, path) {

  var target = new p5.Vector(targetX, targetY);

  if (target.dist(this.futureR) > path.radius) {
    var desired = p5.Vector.sub(target, this.r);
    var steerVel = p5.Vector.sub(desired, this.v);
    steerVel.setMag(this.maxForce);

    this.applyForce(steerVel);
  }

}

Triganism.prototype.scalarProject = function(a, b) {
  var ap = p5.Vector.sub(this.futureR, a);
  var ab = p5.Vector.sub(b, a);

  ab.normalize()
  ab.mult(ap.dot(ab));

  var normalPoint = p5.Vector.add(ab, a);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  ellipse(normalPoint.x, normalPoint.y, 5);
  line(this.futureR.x, this.futureR.y, normalPoint.x, normalPoint.y);

  return normalPoint;
}
