var path;
var triganisms = [];

function setup() {

	createCanvas(windowWidth, windowHeight);

	path = new Path(100, 0); // yBound, numTurns

	for (let i = 0; i < 25; i++) {
		var triganism = new Triganism();
		triganisms.push(triganism);
	}

}

// create new path on key click
function keyPressed() {
	path = new Path(100, 0);
}

setInterval(function() {
	path = new Path(100, 0);
}, 3000);

function draw() {

	background(0);

	path.gen(20); // radius

	for (let triganism of triganisms) {
		triganism.gen();
		var normalPoint = triganism.scalarProject(path.p1, path.p2);
		triganism.steer(normalPoint.x, normalPoint.y, path);
	}

}
