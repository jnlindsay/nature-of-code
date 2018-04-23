function Path(yBound, numTurns) {

    this.p1 = new p5.Vector(0, random(yBound, height - yBound));
    this.p2 = new p5.Vector(width, random(yBound, height - yBound));

}

Path.prototype.gen = function(radius) {

  this.radius = radius;

  // create line
  stroke(255);
  line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);

  // create padding
  noStroke();
  fill(255, 100);

  beginShape()
    vertex(this.p1.x, this.p1.y-radius); // TL
    vertex(this.p2.x, this.p2.y-radius); // TR
    vertex(this.p2.x, this.p2.y+radius); // BR
    vertex(this.p1.x, this.p1.y+radius); // BL
  endShape();

}
