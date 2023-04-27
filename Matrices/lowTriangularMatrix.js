class LowerTriangularMatrix {
  constructor(n) {
    this.n = n;
    this.matrix = new Array(n * (n + 1)/2).fill(0);
  }

  setValueRowMajor(i, j, data) {
    if (i >= j) {
      let index = ((i * (i - 1))/2) + j - 1
      this.matrix[index] = data;
    }
  }

  setValueColMajor(i, j, data) {
    if (i >= j) {
      let index = (this.n * (j-1) - (((j-2) * (j-1))/2)) + (i-j);
      this.matrix[index] = data;
    }
  }

  getRowMajor(i, j) {
    let index = ((i * (i - 1))/2) + j - 1;
    return (i >= j) ? this.matrix[index] : 0;
  }

  getColMajor(i, j) {
    let index = (this.n * (j-1) - (((j-2) * (j-1))/2)) + (i-j);
    return (i >= j) ? this.matrix[index] : 0;
  }

  display(row) {
    for (let i = 1; i<=this.n; i++) {
      for (let j = 1; j<=this.n; j++)
        (i >= j)
          ? process.stdout.write(`${ (row) ? this.getRowMajor(i, j) : this.getColMajor(i, j) }\t`)
          : process.stdout.write("0\t");
      console.log();
    }
  }
}


// Defining and setting the values:
// Row major matrix
let rmmatrix = new LowerTriangularMatrix(4);

rmmatrix.setValueRowMajor(1, 1, 1);
rmmatrix.setValueRowMajor(2, 1, 2);
rmmatrix.setValueRowMajor(2, 2, 3);
rmmatrix.setValueRowMajor(3, 1, 4);
rmmatrix.setValueRowMajor(3, 2, 5);
rmmatrix.setValueRowMajor(3, 3, 6);
rmmatrix.setValueRowMajor(4, 1, 7);
rmmatrix.setValueRowMajor(4, 2, 8);
rmmatrix.setValueRowMajor(4, 3, 9);
rmmatrix.setValueRowMajor(4, 4, 10);

console.log("Row major:");
rmmatrix.display();

console.log("\nColumn major:");

// Column major matrix
let cmmatrix = new LowerTriangularMatrix(4);

cmmatrix.setValueColMajor(1, 1, 1);
cmmatrix.setValueColMajor(2, 1, 2);
cmmatrix.setValueColMajor(2, 2, 3);
cmmatrix.setValueColMajor(3, 1, 4);
cmmatrix.setValueColMajor(3, 2, 5);
cmmatrix.setValueColMajor(3, 3, 6);
cmmatrix.setValueColMajor(4, 1, 7);
cmmatrix.setValueColMajor(4, 2, 8);
cmmatrix.setValueColMajor(4, 3, 9);
cmmatrix.setValueColMajor(4, 4, 10);

cmmatrix.display(false);