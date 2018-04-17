function Ball(x = width/2, angV = 0) {

  this.x = x;
  this.y = height/2;
  this.diam = 20;

  this.angV = angV;

  this.gen = function() {

    stroke(255);
    fill(255);
    ellipse(this.x, this.y, this.diam);
    // line(this.x, height/2, this.x, this.y);

  };

  this.move = function() {

    if (mouseIsPressed) {
      var schiz = random(-40, 40);
      this.diam = 30;
      this.y = 100 * sin(this.angV) + height/2 + schiz;
    } else {
      this.diam = 20;
      this.y = 100 * sin(this.angV) + height/2;
    }

    this.angV += 0.1;

  }

}
