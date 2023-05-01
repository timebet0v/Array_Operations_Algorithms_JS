class Stack {
  constructor(sz) {
    this.size = sz;
    this.top = -1;
    this.stack = new Array(sz);
  }

  isEmpty() {
    return this.top === -1 ? true : false;
  }

  isFull() {
    return this.top === this.size - 1 ? true : false;
  }

  getStackTop() {
    return this.top === -1 ? -1 : this.stack[this.top];
  }

  display() {
    for (let i = this.top; i >= 0; i--) console.log(this.stack[i]);
  }

  push(data) {
    if (this.isFull()) console.log('Stack overflow.');
    else {
      this.top++;
      this.stack[this.top] = data;
    }
  }

  pop() {
    let x = -1;
    if (this.isEmpty()) console.log('Stack underflow');
    else {
      x = this.stack[this.top];
      this.top--;
    }
    return x;
  }

  peek(pos) {
    let x = -1;
    this.top - pos + 1 < 0
      ? console.log('Invalid position.')
      : (x = this.stack[this.top - pos + 1]);
    return x;
  }
}

// TESTS
let stack = new Stack(5);

stack.push(10);
stack.push(15);
stack.display();
console.log(`POP: ${stack.pop()}`);
stack.display();

console.log(`TOP ELEMENT OF STACK IS: ${stack.getStackTop()}`);
console.log(`STACK IS EMPTY: ${stack.isEmpty()}`);
console.log(`STACK IS FULL: ${stack.isFull()}`);

// Parenthesis matching implementation with Stack
function isBalance(exp) {
  let st = new Stack(exp.length);
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(') st.push(exp[i]);
    else if (exp[i] === ')') {
      if (st.isEmpty()) return false;
      st.pop();
    }
  }
  return st.isEmpty() ? true : false;
}

// TESTING THE FUNCTION
let exp = '((a+b)*(c-d))';
console.log(`Are parenthesis matching in ${exp} ?\tAnswer: ${isBalance(exp)}`);
