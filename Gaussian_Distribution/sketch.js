var bar = [];

function setup() {

	createCanvas(800, 500);
	background(0);

	for (var i = 0; i < 10; i++) {
		bar[i] = new Bar(i*(width / 10), height, 200);
	}

}

function draw() {

	for (var i in bar) {
		bar[i].show();
		// bar[i].x ++;
	}


}
