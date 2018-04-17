var balls = [];

function setup() {

	createCanvas(windowWidth, windowHeight);

	var num = 35;
	var difference = 0.5;
	for (let i = 0; i < num; i++){
		balls[i] = new Ball(width/num * (i+0.5), difference * i);
	}

}

function draw() {

	background(0);

	for (let ball of balls) {
		ball.move();
		ball.gen();
	}

}
