var t = 0;

function setup() {
	createCanvas(850, 550);
	// frameRate(10);
}

function draw() {

	background(0);

	fill(255);
	var x = noise(t);

	x = map(x, 0, 1, 0, width);
	ellipse(x, height / 2, 20, 20);

	t += 0.01;

}
