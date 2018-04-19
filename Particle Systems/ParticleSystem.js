function ParticleSystem(rx = width/2, ry = height/5, gravityY, type) {

  this.r = new p5.Vector(rx, ry);
  this.gravity = new p5.Vector(0, gravityY);
  this.type = type;

  this.particles = [];

}

ParticleSystem.prototype.gen = function() {

  // WHAT TYPE OF PARTICLE?

  if (this.type == "circle") {

    var circle = new Circle(15, this.r.x, this.r.y);
    this.particles.push(circle);

  }

  else if (this.type == "square") {

    var square = new Rectangle(15, 15, this.r.x, this.r.y);
    this.particles.push(square);

  }

  else {
    console.log("Type does not exist.");
  }

  // PARTICLE GENERATION

  for (let particle of this.particles) {
    particle.gen();
    particle.sprinkle();
    particle.applyForce(this.gravity);
  }

  for (let i = this.particles.length - 1; i >= 0; i--) {
    if (this.particles[i].isDead()) {
      this.particles.splice(i, 1);
    }
  }

}
