class Node {
  constructor() {
    this.coeff = 0;
    this.exp = 0;
    this.next = null;
  }
}

class LinkedList {
  constructor(array, n) {
    this.first = array[0];
    this.first.next = null;

    let temp,
      i,
      last = this.first;

    for (i = 1; i < n; i++) {
      temp = array[i];
      if (array[i + 1]) temp.next = array[i + 1];
      last.next = temp;
      last = temp;
    }
  }

  display() {
    let p = this.first;

    while (p) {
      // console.log(`${p.coeff}x^${p.exp}`);
      process.stdout.write(`${p.coeff}x^${p.exp} + `);
      p = p.next;
    }
    console.log();
  }

  eval(x) {
    let result = 0;
    let p = this.first;
    while (p) {
      result += p.coeff * Math.pow(x, p.exp);
      p = p.next;
    }
    return result;
  }
}

let p1 = new Node();
p1.coeff = 4;
p1.exp = 3;

let p2 = new Node();
p2.coeff = 9;
p2.exp = 2;

let p3 = new Node();
p3.coeff = 6;
p3.exp = 1;

let p4 = new Node();
p4.coeff = 7;
p4.exp = 0;

let A = [p1, p2, p3, p4];

let pll = new LinkedList(A, 4);
pll.display();
console.log(`Result of P(x) where 'x' = 4 is equal to: ${pll.eval(4)}`);
