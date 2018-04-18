function Pendulum() {

  this.t = 0;
  this.path = [];

  this.origin = new p5.Vector(0, 0);
  this.length = height * 3/4;
  this.gravity = 1;

  this.angle = 0;
  this.aV = 0;
  this.aA = 0;

  this.gen = function() {

    this.length = noise(this.t/100) * 1000;

    this.pendulumForce = this.gravity * cos(this.angle) / this.length;
    this.aA += this.pendulumForce;
    this.aV += this.aA;
    this.angle += this.aV;

    this.r = new p5.Vector(this.length * cos(this.angle), this.length * sin(this.angle));

    push();
    translate(width/2, 0);
    stroke(255);
    fill(255);
    line(0, 0, this.r.x, this.r.y);
    ellipse(this.r.x, this.r.y, 50);
    pop();

    this.aA = 0;
    // this.aV *= 0.995;
    this.t++;

  }

  this.trace = function() {

    var visited = {
      x: this.r.x,
      y: this.r.y
    }

    this.path.push(visited);
    if (this.path.length > 300) {
      this.path.splice(0, 1);
    }

    push();
    translate(width/2, 0);
    beginShape();
    for (let pos of this.path) {
      stroke(255);
      noFill();
      curveVertex(pos.x, pos.y);
    }
    endShape();
    pop();

  }

}
