var walked = [];
var path = [];

var tx = 0;
var ty = 0;

function setup() {

	createCanvas(850, 550);
	walker = new Walker();

}

function draw() {

	// background
	background(0, 0, 0);

	walker.show();
	walker.walk(tx, ty);

	tx += 0.05;
	ty += 0.01;

	var visited = {
		x: walker.x,
		y: walker.y
	}

	path.push(visited);

	for (var i in path) {
		stroke(255, 255, 255);
		point(path[i].x, path[i].y);
		point(path[i].x, path[i].y);
	}

	if (path.length == 500) {
		path = [];
		walker.x = width / 2;
		walker.y = height / 2;
	}

}
