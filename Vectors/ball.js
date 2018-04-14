function Ball() {

  // this.location = new p5.Vector(),

  this.x = width / 2,
  this.y = height / 2,

  this.xspeed = 5,
  this.yspeed = 5,

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 20, 20)
  },

  this.move = function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if (this.x == width || this.x == 0) {
      this.xspeed = -this.xspeed;
      console.log("BOUNCE");
    }

    if (this.y == height || this.y == 0){
      this.yspeed = -this.yspeed;
      console.log("BOUNCE");
    }

  }


}
