var ball = [];

function setup() {

	createCanvas(850, 550);

	for (var i = 0; i < 5; i++) {
		var diameter = random(10, 40);
		var x = random(0 + diameter, width - diameter);
		// var x = width / 2;
		var y = random(0 + diameter, height - diameter);
		var shade = random(155, 255);
		ball[i] = new Ball(x, y, diameter, shade);
	}

}

function draw() {

	background(0);
	for (var i in ball) {

			ball[i].gen(ball[j]);

		for (var j in ball) {
			if (j != i) {
					if (dist(ball[i].r.x, ball[i].r.y, ball[j].r.x, ball[j].r.y) <= ball[i].radius + ball[j].radius) {

						// ball[i].applyForce(-1);
						// ball[j].applyForce(-1);

					}
			}
		}

		ball[i].applyForce(0, 1);

		if (mouseIsPressed && mouseX > width / 2) {
			ball[i].applyForce(1, 1);
		} if (mouseIsPressed && mouseX < width / 2) {
			ball[i].applyForce(-1, 1);
		}

		ball[i].physics(); // must occur after all forces have been accumulated

	}

}
