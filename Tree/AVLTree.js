class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.height = 0;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  nodeHeight(p) {
    let hl = 0,
      hr = 0;
    hl = p && p.left ? p.left.height : 0;
    hr = p && p.right ? p.right.height : 0;

    return hl > hr ? hl + 1 : hr + 1;
  }

  balanceFactor(p) {
    let hl = 0,
      hr = 0;

    hl = p && p.left ? p.left.height : 0;
    hr = p && p.right ? p.right.height : 0;

    return hl - hr;
  }

  inPre(p) {
    while (p && p.right != null) p = p.right;
    return p;
  }

  inSucc(p) {
    while (p && p.left != null) p = p.left;
    return p;
  }

  inOrder(p) {
    if (p) {
      this.inOrder(p.left);
      process.stdout.write(`${p.data} -> `);
      this.inOrder(p.right);
    }
  }

  llRotation(p) {
    let pl = p.left;
    let plr = pl.right;

    pl.right = p;
    p.left = plr;

    p.height = this.nodeHeight(p);
    pl.height = this.nodeHeight(pl);

    if (this.root === p) this.root = pl;

    return pl;
  }

  rrRotation(p) {
    let pr = p.right;
    let prl = pr.left;

    pr.left = p;
    p.right = prl;

    p.height = this.nodeHeight(p);
    pr.height = this.nodeHeight(pr);

    if (this.root === p) this.root = pr;

    return pr;
  }

  lrRotation(p) {
    let pl = p.left;
    let plr = pl.right;

    pl.right = plr.left;
    p.left = plr.right;

    plr.left = pl;
    plr.right = p;

    pl.height = this.nodeHeight(pl);
    p.height = this.nodeHeight(p);
    plr.height = this.nodeHeight(plr);

    if (this.root === p) this.root = plr;

    return plr;
  }

  rlRotation(p) {
    let pr = p.right;
    let prl = pr.left;

    p.right = prl.left;
    pr.left = prl.right;

    prl.left = p;
    prl.right = pr;

    pr.height = this.nodeHeight(pr);
    p.height = this.nodeHeight(p);
    prl.height = this.nodeHeight(prl);

    if (this.root === p) this.root = prl;

    return prl;
  }

  recInsert(p, data) {
    let temp;

    if (p == null) {
      temp = new Node(data);
      temp.height = 1;
      return temp;
    }

    if (data < p.data) p.left = this.recInsert(p.left, data);
    else if (data > p.data) p.right = this.recInsert(p.right, data);

    p.height = this.nodeHeight(p);

    if (this.balanceFactor(p) === 2 && this.balanceFactor(p.left) === 1)
      return this.llRotation(p);
    else if (this.balanceFactor(p) === 2 && this.balanceFactor(p.left) === -1)
      return this.lrRotation(p);
    else if (this.balanceFactor(p) === -2 && this.balanceFactor(p.right) === 1)
      return this.rlRotation(p);
    else if (this.balanceFactor(p) === -2 && this.balanceFactor(p.right) === -1)
      return this.rrRotation(p);

    return p;
  }

  delete(p, key) {
    let q;
    if (p == null) return;
    if (p.left == null && p.right == null) {
      if (p == this.root) this.root = null;
      return;
    }

    if (key < p.data) p.left = this.delete(p.left, key);
    if (key > p.data) p.right = this.delete(p.right, key);
    else {
      if (this.nodeHeight(p.left) > this.nodeHeight(p.right)) {
        q = this.inPre(p.left);
        p.data = q.data;
        p.left = this.delete(p.left, q.data);
      } else {
        q = this.inSucc(p.right);
        p.data = q.data;
        p.right = this.delete(p.right, q.data);
      }
    }

    p.height = this.nodeHeight(p);
    // Balance Factor and Rotation
    if (this.balanceFactor(p) === 2 && this.balanceFactor(p.left) === 1)
      return this.llRotation(p);
    else if (this.balanceFactor(p) === 2 && this.balanceFactor(p.left) === -1)
      return this.lrRotation(p);
    else if (this.balanceFactor(p) === 2 && this.balanceFactor(p.left) === 0)
      return this.llRotation(p);
    else if (this.balanceFactor(p) === -2 && this.balanceFactor(p.right) === 1)
      return this.rlRotation(p);
    else if (this.balanceFactor(p) === -2 && this.balanceFactor(p.right) === -1)
      return this.rrRotation(p);
    else if (this.balanceFactor(p) === -2 && this.balanceFactor(p.right) === 0)
      return this.rrRotation(p);

    return p;
  }
}

let A = [10, 20, 30, 25, 28, 27, 5];

let avl = new AVLTree();
for (let i = 0; i < A.length; i++) {
  avl.root = avl.recInsert(avl.getRoot(), A[i]);
}

avl.inOrder(avl.getRoot());

avl.delete(avl.getRoot(), 28);
console.log(`\nAFTER DELETING: `);
avl.inOrder(avl.getRoot());
