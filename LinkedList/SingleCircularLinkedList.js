/* child class
 NODE has two properties such as:
                        'data' and
                        'next' which contains link to the next child in the heap;
*/

class Node {
  constructor() {
    this.data = null;
    this.next = null;
  }
}

class LinkedList {
  constructor(array, n) {
    this.head = new Node();
    this.head.data = array[0];
    this.head.next = this.head;

    let i, last, temp;
    last = this.head;

    for (i = 1; i < n; i++) {
      temp = new Node();
      temp.data = array[i];
      temp.next = last.next;
      last.next = temp;
      last = temp;
    }
  }

  display() {
    let h = this.head;
    do {
      console.log(h.data);
      h = h.next;
    } while (h != this.head);
  }

  getLength() {
    let p,
      len = 0;
    p = this.head;
    do {
      len++;
      p = p.next;
    } while (p !== this.head);
    return len;
  }

  insert(pos, data) {
    if (pos < 0 || pos > this.getLength()) return;

    let temp, p, i;
    temp = new Node();
    temp.data = data;

    if (pos === 0) {
      if (this.head == null) {
        this.head = temp;
        this.head.next = this.head;
      } else {
        p = this.head;
        while (p.next != this.head) p = p.next;
        p.next = temp;
        temp.next = this.head;
        this.head = temp;
      }
    } else {
      p = this.head;
      for (i = 0; i < pos - 1; i++) p = p.next;
      temp.next = p.next;
      p.next = temp;
    }
  }

  delete(pos) {
    let p, i, x, q;
    if (pos < 0 || pos > this.getLength()) return -1;
    p = this.head;
    if (pos === 1) {
      while (p.next !== this.head) p = p.next;
      x = this.head.data;
      if (p === this.head) {
        this.head = null;
      } else {
        p.next = this.head.next;
        delete this.head.data;
        delete this.head.next;
        this.head = p.next;
      }
    } else {
      for (i = 0; i < pos - 1; i++) p = p.next;
      q = p.next;
      p.next = q.next;
      x = q.data;
      delete q.data;
      delete q.next;
    }
    return x;
  }
}

let A = [2, 3, 4, 5, 6];
let circularLLA = new LinkedList(A, 5);
circularLLA.insert(0, 1);

circularLLA.display();
console.log(`\nDeleted the element at position 1: ${circularLLA.delete(1)}`);
circularLLA.display();
