var ball;

function setup() {

	createCanvas(850, 550);
	background(0);

	// create ball
	ball = new Ball();

}

function draw() {

	background(0);

	var gravity = new p5.Vector(0, 1);
	ball.applyForce(gravity);

	ball.show();
	ball.move();

}
