class Node {
  constructor() {
    this.data = null;
    this.next = null;
  }
}

class Stack {
  getTop() {
    return this.top ? this.top.data : -1;
  }

  isEmpty() {
    return this.top ? false : true;
  }

  isFull() {
    let t = new Node();
    return this.top ? true : false;
  }

  display() {
    let p = this.top;
    while (p) {
      console.log(p.data);
      p = p.next;
    }
  }

  push(data) {
    let temp = new Node();
    if (temp == null) console.log('Stack overflow');
    else {
      temp.data = data;
      temp.next = this.top;
      this.top = temp;
    }
  }

  pop() {
    let x = -1;
    if (this.isEmpty()) console.log('Stack underflow');
    else {
      let p = this.top;
      this.top = this.top.next;
      x = p.data;
    }
    return x;
  }

  peek(pos) {
    let p = this.top;
    for (let i = 0; p != null && i < pos - 1; i++) p = p.next;
    return p != null ? p.data : -1;
  }
}

// TESTS
let stack = new Stack();
console.log(`Stack is empty? ${stack.isEmpty()}`);
console.log(`Stack is Full? ${stack.isFull()}`);
console.log(`Stack Top is: ${stack.getTop()}`);

stack.push(10);
stack.push(15);
console.log(`Stack is empty? ${stack.isEmpty()}`);
console.log(`Stack is Full? ${stack.isFull()}`);
console.log(`Stack Top is: ${stack.getTop()}`);
stack.display();
console.log(`Pop from Stack: ${stack.pop()}`);
console.log(`Stack Top is: ${stack.getTop()}`);

stack.push(8);
stack.push(3);
stack.display();
console.log(`Stack peek 3 is: ${stack.peek(3)}`);
