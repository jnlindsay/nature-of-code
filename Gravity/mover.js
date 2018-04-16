function Mover(x, y, diameter) {

  this.r = new p5.Vector(x, y);
  this.v = new p5.Vector(5, 5);
  this.a = new p5.Vector(0, 0);
  this.diameter = diameter;
  this.mass = this.diameter * 1;
  this.whiteness = 155;

  this.applyForce = function(forceX, forceY) {
    var force = new p5.Vector(forceX, forceY);
    var aAdded = p5.Vector.div(force, this.mass);
    this.a.add(aAdded);
  }

  this.update = function() {
    this.v.add(this.a);
    this.r.add(this.v);
    this.a.mult(0);
  }

  this.gen = function() {
    stroke(155);
    fill(this.whiteness);
    ellipse(this.r.x, this.r.y, this.diameter);
  }

}
