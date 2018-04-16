function Rectangle() {

  this.width = 50;
  this.height = 150;
  this.x = this.width/2;
  this.y = this.height/2;

  this.a = 0; // angle
  this.aV = 0; // angular velocity
  this.aA = 0; // angular acceleration

  this.gen = function(x) {

    this.aA = (x - width/2)/100000; // angular acceleration
    this.aV = constrain(this.aV, -0.4, 0.4);

    this.aV += this.aA;
    this.a += this.aV;

    push();
    translate(width/2, height/2); // centre rectangle
    stroke(255);
    rotate(this.a);
    rect(-this.x, -this.y, this.width, this.height);
    pop();

  }

}
