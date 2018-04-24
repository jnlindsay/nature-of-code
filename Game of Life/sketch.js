var game;

function setup() {

	createCanvas(windowHeight, windowHeight);

	// frameRate(1);

	game = new Game(70, 700); // numCells, numAlive

}

function draw() {

	background(220);

	game.gen();
	game.applyRules();

}
