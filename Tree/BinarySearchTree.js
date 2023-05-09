class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(root) {
    this.root = root;
  }

  getRoot() {
    return this.root;
  }

  insert(key) {
    let p = this.root;
    let r, temp;
    if (this.root == null) {
      temp = new Node(key);
      this.root = temp;
      return;
    }

    while (p != null) {
      r = p;
      if (key > p.data) p = p.right; // CHECKING FOR Duplicate
      else if (key < p.data) p = p.left;
      else return;
    }

    temp = new Node(key);
    key < r.data ? (r.left = temp) : (r.right = temp);
  }

  recursiveInsert(p, key) {
    let temp;

    if (p == null) {
      temp = new Node(key);
      return temp;
    }
    if (key < p.data) {
      p.left = this.recursiveInsert(p.left, key);
    } else if (key > p.data) {
      p.right = this.recursiveInsert(p.right, key);
    }
    return p;
  }

  find(p, key) {
    while (p != null) {
      if (key === p.data) return p;
      else if (key < p.data) p = p.left;
      else p = p.right;
    }
    return null;
  }

  inOrder(p) {
    let stack = [];
    while (p != null || stack.length !== 0) {
      if (p != null) {
        stack.push(p);
        p = p.left;
      } else {
        p = stack.pop();
        process.stdout.write(`${p.data} -> `);
        p = p.right;
      }
    }
  }

  delete(p, key) {
    let q;
    if (p == null) return null;
    if (p.left == null && p.right == null) {
      if (p == this.root) this.root = null;
      return null;
    }

    if (key < p.data) p.left = this.delete(p.left, key);
    else if (key > p.data) p.right = this.delete(p.right, key);
    else {
      if (this.height(p.left) > this.height(p.right)) {
        q = this.inPre(p.left);
        p.data = q.data;
        p.left = this.delete(p.left, q.data);
      } else {
        q = this.inSucc(p.right);
        p.data = q.data;
        p.right = this.delete(p.right, q.data);
      }
    }

    return p;
  }

  height(p) {
    let x, y;
    if (p == null) return 0;
    x = this.height(p.left);
    y = this.height(p.right);
    return x > y ? x + 1 : y + 1;
  }

  inPre(p) {
    while (p && p.right != null) p = p.right;
    return p;
  }

  inSucc(p) {
    while (p && p.left != null) p = p.left;
    return p;
  }
}

// TESTING
let bst = new BinarySearchTree();
console.log('ROOT -> ', bst.getRoot());

bst.insert(20);
bst.insert(40);
bst.insert(10);
bst.insert(25);
bst.insert(35);
bst.insert(45);
bst.recursiveInsert(bst.getRoot(), 55);

const e = bst.find(bst.getRoot(), 25);
console.log(`Search: => ${e ? e.data : e}`);

bst.inOrder(bst.getRoot());

console.log(`\nDeleting the ${bst.delete(bst.getRoot(), 30)}`);
console.log('ROOT -> ', bst.getRoot());
