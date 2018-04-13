function Bar(x = 0, y = 20, height = 100) {

  this.x = x,
  this.y = y - height,
  this.width = width / 10,
  this.height = height,

  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

}
