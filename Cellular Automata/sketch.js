var automaton;
var input, button, instruction;
var rule;

function setup() {

	if (windowWidth > windowHeight) {
		createCanvas(windowHeight, windowHeight);
	} else {
		createCanvas(windowWidth, windowWidth);
	}

	input = createInput();
	input.position(width + 30, 30);
	function storeInput() {
		rule = input.value();
	}

	button = createButton('submit');
	button.position(width + 30, input.y + input.height);
	button.mousePressed(storeInput);

	instruction = createElement('small', 'Please enter a rule between 0 and 255.');
	instruction.position(width + 30, 10);

	automaton = new Automaton(225); // must be odd

}

function draw() {

	background(255);

	if (rule >= 0 && rule <= 255) {
		automaton.run(parseInt(rule));
	}

}
