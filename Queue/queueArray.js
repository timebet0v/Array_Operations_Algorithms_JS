class Queue {
  constructor(n) {
    this.size = n;
    this.front = 0;
    this.rear = 0;
    this.Q = new Array(n);
  }

  display() {
    let i = this.front + 1;
    do {
      process.stdout.write(`${this.Q[i]}`);
      if (i < this.rear) {
        process.stdout.write(` <- `);
      }
      i = (i + 1) % this.size;
    } while (i !== (this.rear + 1) % this.size);
    console.log();
  }

  isEmpty() {
    return this.front === this.rear ? true : false;
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front ? true : false;
  }

  enqueue(data) {
    if (this.isFull()) console.log('Queue is full!');
    else {
      this.rear = (this.rear + 1) % this.size;
      this.Q[this.rear] = data;
    }
  }

  dequeue() {
    let x = -1;
    if (this.isEmpty()) console.log('Queue is empty!');
    else {
      this.front = (this.front + 1) % this.size;
      x = this.Q[this.front];
    }
    return x;
  }
}

let A = [7, 15, 8, 6, 2];
let qA = new Queue(6);
// Queue Enqueue
for (let i = 0; i < A.length; i++) qA.enqueue(A[i]);
qA.display();
console.log(`Queue is full ? : ${qA.isFull()}`);
console.log(`Queue is empty ? : ${qA.isEmpty()}`);

// Queue overflow
qA.enqueue(9);

// Queue dequeue
for (let i = 0; i < A.length; i++) qA.dequeue();

// Queue underflow
qA.dequeue();
