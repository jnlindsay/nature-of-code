var rectangle;

function setup() {

	createCanvas(windowWidth, windowHeight);

	rectangle = new Rectangle();

}

function draw() {

	background(0);
	rectangle.gen(mouseX);

}
