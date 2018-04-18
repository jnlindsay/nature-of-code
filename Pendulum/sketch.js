var pendulum;

function setup() {

	createCanvas(windowWidth, windowHeight);

	pendulum = new Pendulum();

}

function draw() {

	background(0);

	pendulum.gen();
	pendulum.trace();

}
