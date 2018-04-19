function ParticleSystem(x, y) {

  this.particles = [];
  this.gravity = new p5.Vector(0, 0.03);
  this.r = new p5.Vector(x, y)

}

ParticleSystem.prototype.gen = function() {

  // generate particles
  var particle = new Particle(10, this.r.x, this.r.y);
  this.particles.push(particle);

  // activate particles
  for (let particle of this.particles) {
    particle.gen();
    particle.applyForce(this.gravity);
  }

  // manage array length
  for (let i = this.particles.length - 1; i >= 0; i--) {
    if(this.particles[i].isDead()) {
      this.particles.splice(i, 1);
    }
  }

}

ParticleSystem.prototype.listen = function() {
  function mouseClicked() {
    this.gen();
    console.log('hello');
  }
}
