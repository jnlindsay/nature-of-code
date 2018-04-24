function Triganism() {

  this.maxSpeed = 2;
  this.maxForce = 0.5;

  this.r = createVector(random(0, width), random(0, height));
  this.v = createVector(random(-1, 1), random(-1, 1));
  this.v.setMag(this.maxSpeed);
  this.a = createVector(0, 0);

}

Triganism.prototype.applyForce = function(force) {
  this.a.add(force);
}

Triganism.prototype.gen = function() {

  // random movement
  var jiggle = createVector(random(-1, 1), random(-1, 1));
  this.v.add(jiggle);

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
  } if (this.r.y < 0) {
    this.r.y = height;
  } if (this.r.y > height) {
    this.r.y = 0;
  }

  // create triganism vertices
  this.apos = new p5.Vector(12, 0);
  this.bpos = new p5.Vector(-12, -5);
  this.cpos = new p5.Vector(-12, 5);

  // generate triganism
  push();
  translate(this.r.x, this.r.y);
  noStroke();
  fill(255);
  rotate(this.v.heading());
  triangle(this.apos.x, this.apos.y, this.bpos.x, this.bpos.y, this.cpos.x, this.cpos.y);
  pop();

  // reset acceleration
  this.a.mult(0);

}

Triganism.prototype.average = function(triganisms) {

  var velocities = [];
  var num = 0; // number of triganisms to find average velocity of

  // find velocities the current triganism is interested in
  for (let triganism of triganisms) {
    if (this.r.dist(triganism.r) < 40) {
      velocities.push(triganism.v);
      num++;
    }
  }

  // find the average of those velocities
  var aveVelocity = createVector(0, 0);
  for (let velocity of velocities) {
    aveVelocity.add(velocity);
  }

  // hacky code to avoid dividing by zero
  if (num > 0) {
    aveVelocity.mult(1/num);
  }

  // apply a force to the current triganism
  aveVelocity.setMag(this.maxForce);
  this.applyForce(aveVelocity);

}

Triganism.prototype.avoid = function(triganisms) {

  // find velocities the current triganism is interested in
  for (let triganism of triganisms) {
    if (this.r.dist(triganism.r) < 15) {

      var repulsion = p5.Vector.sub(this.r, triganism.r); // vector from that to this

      repulsion.setMag(1);

      this.applyForce(repulsion);

  }
}

}
