function Ball(x = 50, y = 50) {

  this.r = new p5.Vector(x, y),
  this.v = new p5.Vector(0, 0),
  this.a = new p5.Vector(0, 0),

  this.show = function() {
    fill(255);
    ellipse(this.r.x, this.r.y, 20, 20)
  },

  this.move = function() {

    this.v.add(this.a);
    this.r.add(this.v);

    if (this.r.x >= width || this.r.x <= 0) {
      this.r.x = width - 10 - (this.r.x - width); // hacky line of code to combat collision detection decay
      this.v.x *= -1;
      }

    if (this.r.y >= height - 10 || this.r.y <= 0) {
      this.r.y = height - 10 - (this.r.y - height); // hacky line of code to combat collision detection decay
      this.v.y *= -1;
    }

  },

  this.applyForce = function(force) {
    this.a = force;
  }

}
