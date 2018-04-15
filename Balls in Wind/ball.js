function Ball(x, y, diameter, shade) {

  this.r = new p5.Vector(x, y),
  this.v = new p5.Vector(0, 0),
  this.a = new p5.Vector(0, 0),

  this.diameter = diameter,
  this.radius = diameter / 2,
  this.mass = this.diameter,

  this.shade = shade,

  this.gen = function(that) {

    stroke(this.shade);
    fill(this.shade);
    ellipse(this.r.x, this.r.y, this.diameter)

    if (this.r.x > width) {
      this.r.x = 0;
    } if (this.r.x < 0) {
      this.r.x = width;
    }

    if (this.r.y > height - this.radius) {
      this.r.y = height - this.radius; // stupid hack to limit/avoid collision decay
      this.v.y *= -1;
    }

  },

  this.applyForce = function(x, y) {

    this.a = new p5.Vector(x, y);

  },

  this.physics = function() {

    this.v.add(this.a);
    this.r.add(this.v);
    this.a = new p5.Vector(0, 0);

  },

  this.collide = function(that) {
    if (dist(this.r.x, this.r.y, that.r.x, that.r.y) <= this.radius + that.radius) {
      console.log('touch');
    }
  }

}
