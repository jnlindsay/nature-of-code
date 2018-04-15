var ball;

function setup() {

	createCanvas(650, 350);
	background(0);

	// create ball
	ball = new Ball();

}

function draw() {

	background(0);
	ball.show();
	ball.move();

}
