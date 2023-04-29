class DiagonalMatrix {
  constructor(n) {
    this.n = n;
    this.matrix = new Array(n).fill(0);
  }

  getValue(i, j) {
    return i == j ? this.matrix[i - 1] : 0;
  }

  setValue(i, j, data) {
    if (i === j) this.matrix[i - 1] = data;
  }

  display() {
    for (let i = 1; i <= this.n; i++) {
      for (let j = 1; j <= this.n; j++)
        process.stdout.write(`${i == j ? this.matrix[i - 1] : 0}\t`);
      console.log();
    }
  }
}

// Defining and setting the values:
let values = [3, 7, 4, 9, 6];
let n = values.length;

let matrix = new DiagonalMatrix(n);

for (let i = 1; i <= n; i++) matrix.setValue(i, i, values[i - 1]);

matrix.display(); // Displaying all the elements of DiagonalMatrix...
