class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  createTree(data) {
    let p, ltemp, rtemp;
    let Q = []; // Instance of QUEUE
    this.root = new Node(data[0]);
    Q.unshift(this.root); // Enqueue to Q

    for (let i = 1; Q.length !== 0 && i < data.length; i += 2) {
      p = Q.pop();
      if (data[i] !== -1) {
        ltemp = new Node(data[i]);
        p.left = ltemp;
        Q.unshift(ltemp);

        rtemp = new Node(data[i + 1]);
        p.right = rtemp;
        Q.unshift(rtemp);
      }
    }
  }

  iterativePreOrder(p) {
    let stack = []; // Instance of STACK

    while (p != null || stack.length !== 0) {
      if (p != null) {
        process.stdout.write(`${p.data} `);
        stack.push(p);
        p = p.left;
      } else {
        p = stack.pop();
        p = p.right;
      }
    }
  }

  iterativeInOrder(p) {
    let stack = []; // Instance of STACK

    while (p != null || stack.length !== 0) {
      if (p != null) {
        stack.push(p);
        p = p.left;
      } else {
        p = stack.pop();
        process.stdout.write(`${p.data} `);
        p = p.right;
      }
    }
  }

  iterativePostOrder(p) {
    let stack = []; // Instance of STACK
    let temp;

    while (p != null || stack.length !== 0) {
      if (p != null) {
        stack.push(p);
        p = p.left;
      } else {
        temp = stack.pop();
        if (temp.data > 0) {
          temp.data = -temp.data;
          stack.push(temp);
          p = temp.right;
        } else {
          process.stdout.write(`${Math.abs(temp.data)}, `);
        }
      }
    }
    console.log();
  }

  // REC stands for Recursive
  preOrderRec(p) {
    if (p) {
      process.stdout.write(`${p.data} `);
      this.preOrderRec(p.left);
      this.preOrderRec(p.right);
    }
  }

  inOrderRec(p) {
    if (p) {
      this.inOrderRec(p.left);
      process.stdout.write(`${p.data} `);
      this.inOrderRec(p.right);
    }
  }

  postOrderRec(p) {
    if (p) {
      this.postOrderRec(p.left);
      this.postOrderRec(p.right);
      process.stdout.write(`${p.data} `);
    }
  }

  levelOrder() {
    process.stdout.write(`${this.root.data} `); // displaying the data
    let Q = []; // instance of Queue
    Q.unshift(this.root); // enqueue to Q

    while (Q.length !== 0) {
      let p = Q.pop(); // dequeue from Q

      if (p.left) {
        process.stdout.write(`${p.left.data} `);
        Q.unshift(p.left);
      }
      if (p.right) {
        process.stdout.write(`${p.right.data} `);
        Q.unshift(p.right);
      }
    }
  }

  heightRec(root) {
    let x, y;
    x = y = 0;
    if (root === null) return 0;
    x = this.heightRec(root.left);
    y = this.heightRec(root.right);
    return x > y ? x + 1 : y + 1;
  }

  countNodes(p) {
    let x = 0,
      y = 0;
    if (p != null) {
      x = this.countNodes(p.left);
      y = this.countNodes(p.right);
      return x + y + 1;
    }
    return 0;
  }

  countLeafNodes(p) {
    let x = 0,
      y = 0;
    if (!p.left && !p.right) return 1; // Breakpoint for Recursion
    if (p != null) {
      x = this.countLeafNodes(p.left);
      y = this.countLeafNodes(p.right);
      return x + y;
    }
  }
}

let A = [2, 4, 6, 8, 3, 9, 5];

let bt = new Tree();
bt.createTree(A);

console.log('\n\tPreorder RECURSIVELY: ');
bt.preOrderRec(bt.getRoot());

console.log('\n\tInorder RECURSIVELY: ');
bt.inOrderRec(bt.getRoot());

console.log('\n\tPostorder RECURSIVELY: ');
bt.postOrderRec(bt.getRoot());

console.log('\n\tLevelOrder: ');
bt.levelOrder();

console.log(`\n  Height: ${bt.heightRec(bt.getRoot())}`);

console.log('\tITERATIVE PreOrder:');
bt.iterativePreOrder(bt.getRoot());

console.log('\n\tITERATIVE InOrder:');
bt.iterativeInOrder(bt.getRoot());

console.log('\n\tITERATIVE PostOrder:');
bt.iterativePostOrder(bt.getRoot());

console.log(`\nAmount of Nodes: ${bt.countNodes(bt.getRoot())}`);
console.log(`\nAmount of Leaf Nodes: ${bt.countLeafNodes(bt.getRoot())}`);
