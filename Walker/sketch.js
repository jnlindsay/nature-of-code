var walked = [];
var path = [];

function setup() {

	createCanvas(850, 550);
	walker = new Walker();

}

function draw() {

	// background
	background(0, 0, 0);

	walker.show();
	walker.walk();

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

	if (path.length == 200) {
		path = [];
		walker.x = width / 2;
		walker.y = height / 2;
	}

}
