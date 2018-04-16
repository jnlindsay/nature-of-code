var ball;
var path = [];
var t = 0;

function setup() {

	createCanvas(windowWidth, windowHeight);

	ball = new Ball();

}

function draw() {

	background(0);

	ball.physics(); // must be before ball.gen()
	ball.gen();

	traveled = {

		x: ball.x,
		y: ball.y

	};

	path.push(traveled);
	if (path.length > 100) {
		path.splice(0, 1);
	}

	stroke(255);
	noFill();

	push();
	translate(width/2, height/2);
	beginShape();
	for (let i in path) {
		curveVertex(path[i].x, path[i].y);
	}
	endShape();
	pop();

}
