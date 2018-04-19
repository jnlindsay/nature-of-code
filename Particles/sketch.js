var particleSystem;
var particleSystems = [];

function mouseClicked() {
	var particleSystem = new ParticleSystem(mouseX, mouseY);
	particleSystems.push(particleSystem);
}

function setup() {

	createCanvas(windowWidth, windowHeight);

}

function draw() {

	background(0);

	if (particleSystems.length > 0) {
		for (let particleSystem of particleSystems) {
			particleSystem.gen();
		}
	}

}
