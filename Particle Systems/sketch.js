// Note: this was more of a practice of JavaScript inheritance than anything else,
// hence the somewhat bloated nature of this project.

var particleSystem;

function setup() {

	createCanvas(windowWidth, windowHeight);

  particleSystem = new ParticleSystem(width/2, height/10, 0.2, "square");

}

// TOGGLE PARTICLE TYPE

function mouseClicked() {

	if (particleSystem.type == "square") {
		particleSystem.type = "circle";
	} else if (particleSystem.type == "circle") {
		particleSystem.type = "square";
	} else {
		console.log("Toggle failed.");
	}

}

function draw() {

	background(0);

	particleSystem.gen();

}
