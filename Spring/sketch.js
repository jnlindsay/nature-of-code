var spring;

function setup() {

	createCanvas(windowWidth, windowHeight);

	spring = new Spring(15, 0.01); // restLength, radius, constant
	gravity = new p5.Vector(0, 1);

}

function draw() {

	background(0);

	spring.gen();
	spring.applyForce(spring.spring());
	spring.applyForce(gravity);
	spring.trace();

}
