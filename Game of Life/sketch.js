var game;

function setup() {

	createCanvas(windowHeight, windowHeight);

	// frameRate(1);

	game = new Game(50, 500); // numCells, numAlive

}

function draw() {

	background(220);

	game.gen();
	game.applyRules();

}
