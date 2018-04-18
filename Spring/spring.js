function Spring(radius, constant) {
    this.origin = new p5.Vector(0, 0);
    this.restLength = height/random(3, 6);
    this.r = new p5.Vector(100, height/random(1, 3));
    this.v = new p5.Vector(0, 0);
    this.a = new p5.Vector(0, 0);
    this.radius = radius;
    this.k = constant;

    this.counter = 0;
    this.path = [];
}

Spring.prototype.gen = function() {
  push()
  translate(width/2, 0);
  stroke(255);
  fill(255);
  rect(-5/2, 0, 5, 5);
  line(this.origin.x, this.origin.y, this.r.x, this.r.y);
  ellipse(this.r.x, this.r.y, this.radius*2);
  pop();
}

Spring.prototype.spring = function() {
  push();
  translate(width/2, 0);

  this.currentLength = this.r.mag(); // must be continuously computed
  var spring = new p5.Vector.sub(this.r, this.origin); // note: the direction *is* the bob's position
  spring.normalize();
  var stretch = this.currentLength - this.restLength;
  spring.mult(-this.k * stretch);

  pop();
  return spring;
}

Spring.prototype.applyForce = function(force) {
  this.a.add(force);
  this.v.add(this.a);
  this.r.add(this.v);
  this.a.mult(0); // reset acceleration
}

Spring.prototype.trace = function() {

  var visited = {
    x: this.r.x,
    y: this.r.y
  }

  this.path.push(visited);

  push();
  translate(width/2, 0);
  beginShape();
  stroke(255);
  noFill();
  for (let i = 0; i < this.path.length; i++) {
    curveVertex(this.path[i].x, this.path[i].y);
  }
  endShape();
  pop();

  if (this.path.length > 1500) {
    this.path.splice(0, 1);
  }

  this.counter++;

}
