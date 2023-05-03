class Node {
  constructor() {
    this.data = null;
    this.next = null;
  }
}

class QueueLL {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isFull() {
    let t = new Node();
    return t == null ? true : false;
  }

  isEmpty() {
    return this.front == null ? true : false;
  }

  enqueue(data) {
    if (this.isFull()) console.log('Queue is FULL!');
    else {
      let temp = new Node();
      temp.data = data;
      temp.next = null;
      if (this.front == null) this.front = this.rear = temp;
      else {
        this.rear.next = temp;
        this.rear = temp;
      }
    }
  }

  dequeue() {
    let x = -1;
    if (this.isEmpty()) console.log('Queue is empty!');
    else {
      x = this.front.data;
      this.front = this.front.next;
    }
    return x;
  }

  display() {
    if (this.isEmpty()) console.log('Queue is Empty!');
    let p = this.front;
    while (p) {
      console.log(p.data);
      p = p.next;
    }
  }
}

let qll = new QueueLL();
console.log(`Queue is empty ? ${qll.isEmpty()}`);
console.log(`Queue is full ? ${qll.isFull()}`);

// Enqueue
qll.enqueue(8);
qll.enqueue(3);
qll.enqueue(5);
qll.enqueue(1);
qll.display();
console.log(`Queue is empty ? ${qll.isEmpty()}`);

// Dequeue
console.log(`Dequeue: ${qll.dequeue()}`);
qll.display();
