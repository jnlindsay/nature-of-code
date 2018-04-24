///// GET RANDOM INTEGER
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Game(numCells, numAlive) {

  this.numCells = numCells;
  this.cellDiam = height/this.numCells;
  this.cellRadius = this.cellDiam/2;

  this.rows = [];

  // initialise matrix with dead cells
  for (let i = 0; i < this.numCells; i++) {
    var col = [];
    for (let j = 0; j < this.numCells; j++) {
      col.push(false);
    }
    this.rows.push(col);
  }

  for (let i = 0; i < numAlive; i++) {
    this.rows[getRandomInt(this.numCells)][getRandomInt(this.numCells)] = true;
  }

  // this.rows[5][6] = true;
  // this.rows[6][6] = true;
  // this.rows[7][6] = true;

}

///// APPLY RULES
Game.prototype.applyRules = function() {

  // absolutely stupid hack to combat passing by reference
  var oldRows = [];
  for (let i = 0; i < this.numCells; i++) {
    var emptyArray = [];
    oldRows.push(emptyArray);
  }

  for (let i = 0; i < this.numCells; i++) {
    for (let j = 0; j < this.numCells; j++) {
      oldRows[i][j] = this.rows[i][j];
    }
  }

  // count num of adjacent living cells
  for (let i = 1; i < this.numCells-1; i++) {
    for (let j = 1; j < this.numCells-1; j++) {

      var counter = 0;

      if (oldRows[i-1][j-1]) {
        counter++;
      }
      if (oldRows[i-1][j]) {
        counter++;
      }
      if (oldRows[i-1][j+1]) {
        counter++;
      }
      if (oldRows[i][j-1]) {
        counter++;
      }
      if (oldRows[i][j+1]) {
        counter++;
      }
      if (oldRows[i+1][j-1]) {
        counter++;
      }
      if (oldRows[i+1][j]) {
        counter++;
      }
      if (oldRows[i+1][j+1]) {
        counter++;
      }

      if (oldRows[i][j-1] || oldRows[i-1][j]) {
        // this.rows[i][j] = true;
      }

      // RULES
      if (counter < 2) {
        this.rows[i][j] = false;
      }
      if ((counter == 2 || counter == 3) && oldRows[i][j]) {
        this.rows[i][j] = true;
      }
      if (counter == 3) {
        this.rows[i][j] = true;
      }
      if (counter > 3) {
        this.rows[i][j] = false;
      }

    }
  }

}

///// NEXT GENERATION
Game.prototype.gen = function() {

  rectMode(CENTER);

  for (i = 0; i < this.rows.length; i++) {
    for (j = 0; j < this.rows[i].length; j++) {
      push();

      // translate cell based on loop
      translate(this.cellRadius + j*this.cellDiam, this.cellRadius + i*this.cellDiam);

      // alive/dead
      if (this.rows[i][j]) {
        fill(0);
      } else {
        stroke(0);
        fill(255);
      }

      // create cell
      rect(0, 0, this.cellDiam, this.cellDiam);

      pop();
    }
  }

}
