var ball;

function setup() {

	createCanvas(850, 550);
	background(0);

	// create ball
	ball = new Ball();

}

function draw() {

	background(0);
	ball.show();
	ball.move();

}
