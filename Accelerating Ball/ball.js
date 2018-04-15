function Ball() {

  this.p = new p5.Vector(width/2, height/2),
  this.v = new p5.Vector(0, 0),
  this.a = new p5.Vector(0.1, 0.1),

  this.show = function() {
    fill(255);
    ellipse(this.p.x, this.p.y, 20, 20)
  },

  this.move = function() {

    this.p.add(this.v);
    this.v.add(this.a);

    if (this.p.x > width || this.p.x < 0) {
      this.v.x = -this.v.x;
      this.a.x = -this.a.x;
      }

    if (this.p.y > height || this.p.y < 0) {
      this.v.y = -this.v.y;
      this.a.y = -this.a.y;
    }

  }

}
