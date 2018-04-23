var triganisms = [];

function setup() {

	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < 100; i++) {
		var triganism = new Triganism();
		triganisms.push(triganism);
	}

}

function draw() {

	background(0);

	for (let triganism of triganisms) {
		triganism.gen();
		triganism.average(triganisms);
		triganism.avoid(triganisms);
	}

}
