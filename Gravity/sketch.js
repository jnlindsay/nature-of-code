var attractor;
var movers = [];
var path = [];

function setup() {

	createCanvas(windowWidth, windowHeight);
	attractor = new Attractor();

	for(let i = 0; i < 5; i++) {
		randPos = [random(0, width), random(0, height)];
		diameter = random(10, 30);
		movers[i] = new Mover(randPos[0], randPos[1], diameter);
	}


}

function draw() {

	background(0);
	attractor.gen();

	for (let i in movers) {
		forceX = attractor.attract(movers[i]).x;
		forceY = attractor.attract(movers[i]).y;
		movers[i].applyForce(forceX, forceY);
		movers[i].update();
		movers[i].gen();
	}

	var visited = {
		x: movers[0].r.x,
		y: movers[0].r.y
	}

	path.push(visited);

	noFill();
	beginShape();
	for (let i in path) {
		stroke(255);
		curveVertex(path[i].x, path[i].y);
	}
	endShape();

}
