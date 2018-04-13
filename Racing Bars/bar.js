function Bar(x = 0, y = 20, height = 100) {

  this.x = x,
  this.y = y - height,
  this.wid = width / 81,
  this.hei = height,

  this.show = function() {
    fill(255);
    stroke(200);
    rect(this.x, this.y, this.wid, this.hei);
  }

}
