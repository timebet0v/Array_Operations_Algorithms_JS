class ToeplitzMatrix {
  constructor(n) {
    this.n = n;
    this.matrix = new Array(n + n - 1).fill(n);
  }

  setValue(i, j, data) {
    let index = i <= j ? j - 1 : this.n + i - j - 1;
    this.matrix[index] = data;
  }

  getValue(i, j) {
    let index = i <= j ? j - i : i > j ? this.n + i - j - 1 : -1;
    return index != -1 ? this.matrix[index] : 0;
  }

  display() {
    for (let i = 1; i <= this.n; i++) {
      for (let j = 1; j <= this.n; j++) {
        process.stdout.write(`|${this.getValue(i, j)}\t`);
      }
      console.log();
    }
  }
}

let toeplitzMatrix = new ToeplitzMatrix(5);

toeplitzMatrix.setValue(1, 1, 2);
toeplitzMatrix.setValue(1, 2, 3);
toeplitzMatrix.setValue(1, 3, 4);
toeplitzMatrix.setValue(1, 4, 5);
toeplitzMatrix.setValue(1, 5, 6);

toeplitzMatrix.setValue(2, 1, 7);
toeplitzMatrix.setValue(3, 1, 8);
toeplitzMatrix.setValue(4, 1, 9);
toeplitzMatrix.setValue(5, 1, 10);

toeplitzMatrix.display();
