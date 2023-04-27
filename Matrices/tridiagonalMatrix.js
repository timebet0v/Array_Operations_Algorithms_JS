class TridiagonalMatrix {
  constructor(n) {
    this.n = n;
    this.matrix = new Array(3*n-2).fill(0);
  }

  setValue(i, j, data) {
    let index = (i-j===1) ? i-2
              : (i===j) ? this.n + i - 2
              : (i-j===-1) ? 2 * this.n + i - 2 : -1;
    this.matrix[index] = data;
  }
  
  getValue(i, j) {
    let index = (i-j===1) ? i-2
              : (i===j) ? this.n + i - 2
              : (i-j===-1) ? 2 * this.n + i - 2 : -1;
    return (index != -1) ? this.matrix[index] : 0;
  }

  display() {
    for (let i = 1; i <= this.n; i++) {
      for (let j = 1; j <= this.n; j++)
        process.stdout.write(`|${ (i-j <= 1) ? this.getValue(i, j) : 0}\t`);
      console.log();
    }
  }
}

// Defining and setting the values:
let tridiagonalMatrix = new TridiagonalMatrix(5);

tridiagonalMatrix.setValue(1, 1, 1);    // Main diagonal
tridiagonalMatrix.setValue(1, 2, 2);    // Upper diagonal
tridiagonalMatrix.setValue(2, 1, 3);    // Lower diagonal
tridiagonalMatrix.setValue(2, 2, 4);    // Main diagonal
tridiagonalMatrix.setValue(2, 3, 5);    // Upper diagonal
tridiagonalMatrix.setValue(3, 2, 6);    // Lower diagonal
tridiagonalMatrix.setValue(3, 3, 7);    // Main diagonal
tridiagonalMatrix.setValue(3, 4, 8);    // Upper diagonal
tridiagonalMatrix.setValue(4, 3, 9);    // Lower diagonal
tridiagonalMatrix.setValue(4, 4, 10);   // Main diagonal
tridiagonalMatrix.setValue(4, 5, 11);   // Upper diagonal
tridiagonalMatrix.setValue(5, 4, 12);   // Lower diagonal
tridiagonalMatrix.setValue(5, 5, 13);   // Main diagonal

tridiagonalMatrix.display();            // Displaying the all values in matrix form