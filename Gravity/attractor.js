function Attractor() {

  var gConst = 50;

  this.mass = 1;
  this.r = new p5.Vector(width/2, height/2);

  this.gen = function() {
    stroke(255);
    fill(255);
    ellipse(width/2, height/2, 100);
  }

  this.attract = function(mover) {
    var fDir = new p5.Vector();
    fDir = p5.Vector.sub(this.r, mover.r);
    var distance = fDir.mag();
    distance = constrain(distance, 10, 10);
    fDir.normalize(); // only direction of force matters
    var strength = (gConst * this.mass * mover.mass) / (distance ** 2);
    fDir = fDir.mult(strength);
    return fDir;
  }

}
