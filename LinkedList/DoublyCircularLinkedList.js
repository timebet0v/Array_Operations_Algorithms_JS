class Node {
  constructor() {
    this.prev = null;
    this.data = null;
    this.next = null;
  }
}

class LinkedList {
  constructor(array, n) {
    this.head = new Node();
    this.head.data = array[0];
    this.head.prev = this.head.next = this.head;
    let i,
      temp,
      last = this.head;

    for (i = 1; i < n; i++) {
      temp = new Node();
      temp.data = array[i];
      temp.next = last.next;
      temp.prev = last;
      last.next = temp;
      last = temp;
      this.head.prev = last;
    }
  }

  display() {
    let p = this.head;
    do {
      process.stdout.write(`${p.data} <-> `);
      p = p.next;
    } while (p !== this.head);
  }

  getLength() {
    let len = 0;
    let p = this.head;
    do {
      len++;
      p = p.next;
    } while (p !== this.head);
    return len;
  }

  insert(pos, data) {
    if (pos < 0 || pos > this.getLength()) return;

    let p = this.head;
    let temp = new Node();
    temp.data = data;

    if (pos === 0) {
      if (this.head == null) {
        this.head = temp;
        this.head.prev = this.head.next = this.head;
      } else {
        p = p.prev;
        temp.next = this.head;
        temp.prev = p;
        p.next = temp;
        this.head = temp;
      }
    } else {
      for (let i = 0; i < pos - 1; i++) {
        p = p.next;
      }
      temp.next = p.next;
      p.next.prev = temp;
      p.next = temp;
      temp.prev = p;
    }
  }

  delete(pos) {
    if (pos < 0 || pos > this.getLength()) return;
    let x = -1;
    let p = this.head;
    if (pos === 0) {
      x = this.head.data;
      this.head = this.head.next;
      if (this.head) this.head.prev = p.prev;
      p.prev.next = this.head;
      delete p.prev;
      delete p.data;
      delete p.next;
    } else {
      for (let i = 0; i < pos - 1; i++) {
        p = p.next;
      }
      p.prev.next = p.next;
      if (p.next) p.next.prev = p.prev;
      x = p.data;
      delete p.next;
      delete p.data;
      delete p.prev;
    }
    return x;
  }
}

// dcll -> Doubly Circular Linked List
let A = [6, 9, 2, 7, 8];
let dcll = new LinkedList(A, 5);
dcll.display();

console.log(`Length is: ${dcll.getLength()}`);
dcll.insert(0, 3);
dcll.display();
console.log(`Deleted the element in position 3: ${dcll.delete(3)}`);
dcll.display();
