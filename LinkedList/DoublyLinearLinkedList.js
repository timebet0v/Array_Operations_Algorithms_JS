class Node {
  constructor() {
    this.prev = null;
    this.data = null;
    this.next = null;
  }
}

class LinkedList {
  constructor(array, n) {
    this.first = new Node();
    this.first.data = array[0];
    this.first.prev = this.first.next = null;
    let temp, last, i;
    last = this.first;

    for (i = 1; i < n; i++) {
      temp = new Node();
      temp.data = array[i];
      temp.next = last.next;
      temp.prev = last;
      last.next = temp;
      last = temp;
    }
  }

  display() {
    let p;
    p = this.first;
    while (p !== null) {
      console.log(p.data);
      p = p.next;
    }
  }

  getLength() {
    let p,
      len = 0;
    p = this.first;
    while (p !== null) {
      len++;
      p = p.next;
    }
    return len;
  }

  insert(pos, data) {
    if (pos < 0 || pos > this.getLength()) return;
    let temp = new Node();
    temp.data = data;
    let p = this.first;
    if (pos === 0) {
      temp.prev = null;
      temp.next = this.first;
      this.first.prev = temp;
      this.first = temp;
    } else {
      for (let i = 0; i < pos - 1; i++) p = p.next;
      temp.prev = p;
      temp.next = p.next;
      if (p.next) p.next.prev = temp;
      p.next = temp;
    }
  }

  delete(pos) {
    if (pos < 0 || pos > this.getLength()) return -1;
    let x = -1;
    let p = this.first;
    if (pos === 0) {
      x = this.first.data;
      this.first = this.first.next;
      if (this.first) this.first.prev = null;
      delete p.prev;
      delete p.next;
      delete p.data;
    } else {
      for (let i = 0; i < pos - 1; i++) p = p.next;
      p.prev.next = p.next;
      if (p.next) p.next.prev = p.prev;
      x = p.data;
      delete p.prev;
      delete p.data;
      delete p.next;
    }
    return x;
  }

  reverse() {
    let p = this.first;
    let temp;
    while (p) {
      temp = p.next;
      p.next = p.prev;
      p.prev = temp;
      p = p.prev;
      if (p !== null && p.next === null) {
        p.next = p.prev;
        p.prev = null;
        this.first = p;
        break;
      }
    }
  }
}

// Elements to insert into the Doubly Linked List
let A = [10, 20, 30, 40, 50];
let dll = new LinkedList(A, 5);
console.log(`Length of Doubly Linked List is: ${dll.getLength()}`);
dll.display();
console.log(); // break line

dll.insert(3, 35); // Inserting at the position => 3
dll.insert(0, 5); // Inserting at the beginning...
dll.display();

console.log(`\nDeleted the element at position 2: ${dll.delete(2)}`);
dll.display();
console.log(`\nDeleted the element at position 0: ${dll.delete(0)}`);
dll.display();

console.log();
dll.reverse();
dll.display();
