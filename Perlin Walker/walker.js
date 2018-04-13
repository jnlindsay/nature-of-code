function Walker() {

	this.x = width / 2;
	this.y = height / 2;

	this.show = function() {
		stroke(255, 255, 255)
		point(this.x, this.y);
	}

	this.walk = function(tx, ty) {

		var x = noise(tx);
		var y = noise(ty);
		x = map(x, 0, 1, 0, width);
		y = map(y, 0, 1, 0, height);

		// this.x += random(-1, 1);
		this.x = x;
		this.y = y;

	}

}
