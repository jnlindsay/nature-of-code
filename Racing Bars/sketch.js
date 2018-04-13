var bar = [];
var vel = 10;

function setup() {

	createCanvas(800, 500);
	background(0);

	for (var i = 0; i < 81; i++) {
		bar[i] = new Bar(i*(width / 81), height, 0);
	}

}

function draw() {

	for (var i in bar) {

		do {
			bar[i].show();
			// increase height of bars
			bar[i].hei += Math.abs(bar[i].x - width/2) ** -1/10 * vel;
			// decrease y position so bars don't go off screen
			bar[i].y -= Math.abs(bar[i].x - width/2) ** -1/10 * vel;
		} while
			(random(100) < 10);

	}


}
