function Ball() {

  this.aA = 0;
  this.aV = 0.1;
  this.ang = 0;
  this.r = 150;
  this.diam = 30;

  this.physics = function() {

    this.aV += this.aA;
    this.ang += this.aV;

    t++;
    this.r = noise(t/100)*200;

    this.x = this.r * cos(this.ang);
    this.y = this.r * sin(this.ang);

  }

  this.gen = function() {

    push();
    translate(width/2, height/2);
    stroke(255);
    fill(255);
    line(0, 0, this.x, this.y);
    ellipse(this.x, this.y, this.diam);
    pop()

  }

}
