function Ball() {

  this.r = new p5.Vector(width / 2, height / 6), // height must be even number because bugs
  this.v = new p5.Vector(0, 0),
  this.a = new p5.Vector(0, 0),

  this.show = function() {
    fill(255);
    ellipse(this.r.x, this.r.y, 20, 20)
  },

  this.move = function() {

    this.v.add(this.a);
    this.r.add(this.v);
    this.a.mult(0);

    if (this.r.x > width) {
      this.r.x = 0;
    }

    if (this.r.x < 0) {
      this.r.x = width;
    }

    if (this.r.y >= height - 10) {
      this.r.y = height - 10 - (this.r.y - height); // hacky line of code to combat collision detection decay
      this.v.y *= -1;
    }

    if (mouseIsPressed && mouseX > this.r.x) {
      let wind = new p5.Vector(1, 0);
      ball.applyForce(wind);
    } if (mouseIsPressed && mouseX < this.r.x) {
      let wind = new p5.Vector(-1, 0);
      ball.applyForce(wind);
    }

  },

  this.applyForce = function(force) {
    this.a.add(force);
  }

}
