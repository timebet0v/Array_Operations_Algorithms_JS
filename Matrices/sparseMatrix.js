class Element {
  constructor(i, j, data) {
    this.i = i;
    this.j = j;
    this.data = data;
  }
}

class SparseMatrix {
  constructor(m, n) {
    this.m = m;
    this.n = n;
    this.el = [];
  }

  create(array) {
    for (let i = 0; i < array.length; i++) {
      this.el.push(array[i]);
    }
  }

  show() {
    for (let item of this.el) {
      console.log(item);
    }
  }

  add(sparse2) {
    if (this.m != sparse2.m || this.n != sparse2.n) return null;

    let sumSparse = new SparseMatrix(this.m, this.n);
    let i = 0,
      j = 0,
      k = 0;

    while (i < this.el.length && j < sparse2.el.length) {
      if (this.el[i].i < sparse2.el[j].i) {
        sumSparse.el[k++] = this.el[i++];
      } else if (this.el[i].i > sparse2.el[j].i) {
        sumSparse.el[k++] = sparse2.el[j++];
      } else {
        if (this.el[i].j < sparse2.el[j].j) {
          sumSparse.el[k++] = this.el[i++];
        } else if (this.el[i].j > sparse2.el[j].j) {
          sumSparse.el[k++] = sparse2.el[j++];
        } else {
          sumSparse.el[k] = this.el[i];
          sumSparse.el[k++].data = this.el[i++].data + sparse2.el[j++].data;
        }
      }
    }
    for (; i < this.el.length; i++) sumSparse.el[k++] = this.el[i];
    for (; j < sparse2.el.length; j++) sumSparse.el[k++] = sparse2.el[j];

    sumSparse.m = this.m;
    sumSparse.n = this.n;

    return sumSparse;
  }

  display() {
    let i,
      j,
      k = 0;
    for (i = 1; i <= this.m; i++) {
      for (j = 1; j <= this.n; j++) {
        if (k < this.el.length) {
          process.stdout.write(
            `|${
              i == this.el[k].i && j == this.el[k].j ? this.el[k++].data : 0
            }\t`
          );
        } else {
          process.stdout.write(`|0\t`);
        }
      }
      console.log();
    }
  }
}

let s1 = new SparseMatrix(5, 5);

const el0 = new Element(1, 3, 3);
const el1 = new Element(2, 1, 4);
const el2 = new Element(2, 5, 7);
const el3 = new Element(3, 3, 5);
const el4 = new Element(3, 5, 8);
const el5 = new Element(4, 2, 6);

s1.create([el0, el1, el2, el3, el4, el5]);
console.log('\tFIRST MATRIX');
// s1.show();
s1.display();

let s2 = new SparseMatrix(5, 5);

const el6 = new Element(1, 5, 2);
const el7 = new Element(2, 2, 5);
const el8 = new Element(2, 5, 6);
const el9 = new Element(3, 1, 4);
const el10 = new Element(3, 3, 8);
const el11 = new Element(4, 5, 9);

s2.create([el6, el7, el8, el9, el10, el11]);
console.log('\n\tSECOND MATRIX');
// s2.show();
s2.display();

let s3 = s1.add(s2);

// s3.show();
console.log('\n\tTHIRD MATRIX');
s3.display();
