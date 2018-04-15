var ball;
var path = [];

function setup() {

	createCanvas(850, 550);
	background(0);

	// create ball
	ball = new Ball(500, 100);

}

function draw() {

	background(0);
	ball.show();
	ball.move();

	var visited = {
		x: ball.r.x,
		y: ball.r.y
	};

	path.push(visited);

	noFill();
	beginShape();
	for (var i in path) {
		stroke(255);
		curveVertex(path[i].x, path[i].y);
	}
	endShape();

	var gravity = new p5.Vector(1, 1);
	ball.applyForce(gravity);

}
