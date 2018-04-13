function Walker() {

	this.x = width / 2;
	this.y = height / 2;

	this.show = function() {
		stroke(255, 255, 255)
		point(this.x, this.y);
	}

	this.walk = function() {
		this.x += random(-5, 5)
		this.y += random(-5, 5)
	}

}
