function Automaton(numHorizCells) {

  // how many cells across the grid?
  this.numHorizCells = numHorizCells;

  // calculate width of each cell
  this.diam = width/this.numHorizCells;

  // generation counter
  this.generation = 0;

  // array of arrangements
  this.arrangements = [];

}

function byteBinariser(num) {

	// convert integer to binary as a string
	numBinary = num.toString(2);

	// create byte array
	var byte = [];

	// add numBinary digits to array (backwards)
	for (let i = numBinary.length-1; i >= 0; i--) {
		byte.unshift(numBinary[i]);
	}

	// fill the remaining bits with zeroes
	for (let i = 8 - numBinary.length; i > 0; i--) {
		byte.unshift(0);
	}

	return byte;

}

Automaton.prototype.run = function(ruleDecimal) {

  // conditional so that arrangements aren't added forever
  if (this.generation < this.numHorizCells) {

    var rule = byteBinariser(ruleDecimal);

    // generate current arrangement
    var arrangement = [];

      for (let i = 0; i < this.numHorizCells; i++) {
        if (this.generation == 0) {

          // initial arrangement has cell in center
          for (let k = 0; k < (this.numHorizCells-1)/2; k++) {
            arrangement.push(0);
          }
          arrangement.push(1);
          for (let k = 0; k < (this.numHorizCells-1)/2; k++) {
            arrangement.push(0);
          }

        } else {

          for (let i = 0; i < this.numHorizCells; i++) {

            // simplification of top left, top centre, and top right cells
            var l = Boolean(this.arrangements[this.generation-1][i-1]);
            var c = Boolean(this.arrangements[this.generation-1][i]);
            var r = Boolean(this.arrangements[this.generation-1][i+1]);

            // all possible previous arrangements
            var criteria = [
              Boolean(l && c && r),
              Boolean(l && c && !r),
              Boolean(l && !c && r),
              Boolean(l && !c && !r),
              Boolean(!l && c && r),
              Boolean(!l && c && !r),
              Boolean(!l && !c && r),
              Boolean(!l && !c && !r)
            ];

            // find which criterion is true and evaluate it with the ruleset
            for (let j = 0; j < criteria.length; j++) {
              if (criteria[j]) {
                arrangement.push(criteria[j] * rule[j]);
              }
            }

          }

        }

      }

    // save current arrangement
    this.arrangements.push(arrangement);

  }

  // fill in boxes
  rectMode(CENTER);
  noStroke();
  for (let i = 0; i < this.arrangements.length; i++) {
    for (let j = 0; j < this.numHorizCells; j++) {
      push();
      translate(this.diam/2 + j*this.diam, this.diam/2 + i*this.diam);
      if (this.arrangements[i][j]) {
        fill(0);
      } else {
        fill(255);
      }
      rect(0, 0, this.diam, this.diam);
      pop();
    }
  }

  // increment generation
  if (this.generation < this.numHorizCells) {
    this.generation++;
  }

}
