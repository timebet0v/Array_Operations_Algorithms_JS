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

/*
  SINGLE LINEAR LINKED LIST: contains sequence of children which defined above as 'Node'...
*/

class LinkedList {
  constructor(array, n) {
    this.first = new Node();
    this.first.data = array[0];
    this.first.next = null;

    this.last = this.first;

    for (let i = 1; i < n; i++) {
      let temp = new Node();
      temp.data = array[i];
      temp.next = null;
      this.last.next = temp;
      this.last = temp;
    }
  }

  // METHOD: 'display' for showing the all elements in the terminal by traversing...
  display() {
    let p = this.first;

    while (p) {
      process.stdout.write(`${p.data} -> `);
      p = p.next;
    }
    console.log();
  }

  // METHOD: 'getLength' for getting the amount of elements in the list...
  getLength() {
    let p = this.first;
    let len = 0;

    while (p) {
      len++;
      p = p.next;
    }
    return len;
  }

  findMiddleNode() {
    let p, q;
    p = q = this.first;
    while (q) {
      q = q.next;
      if (q) q = q.next;
      if (q) p = p.next;
    }
    return p.data;
  }

  // METHOD: 'insertAt' for putting the element to the list at given position...
  insertAt(pos, data) {
    if (pos === 0) {
      let newNode = new Node();
      newNode.data = data;
      newNode.next = this.first;
      this.first = newNode;
    } else if (pos > 0) {
      let p = this.first;
      for (let i = 0; i < pos - 1 && p; i++) {
        p = p.next;
      }
      if (p) {
        let temp = new Node();
        temp.data = data;
        temp.next = p.next;
        p.next = temp;
      }
    }
  }

  // METHOD: 'insertInSorted' puts the given element after the lower element...
  // For instance: if given element is equal to '3' it puts after the 2 or lower than 3
  // P.S. Make sure that your linked list is sorted...
  insertInSorted(data) {
    let p = this.first;
    let q = null;
    while (p && p.data < data) {
      q = p;
      p = p.next;
    }
    let temp = new Node();
    temp.data = data;
    if (this.first === null) {
      this.first = temp;
    }
    if (this.first === p) {
      temp.next = this.first;
      this.first = temp;
    }
    temp.next = q.next;
    q.next = temp;
  }

  // METHOD: 'insertLast' adds the given element at last position in the list.
  insertLast(data) {
    let temp = new Node();
    temp.data = data;
    temp.next = null;
    if (this.first === null) {
      this.first = temp;
    } else {
      this.last.next = temp;
      this.last = temp;
    }
  }

  // METHOD: 'delete' removes the element at given position...
  delete(pos) {
    let p = this.first;
    if (pos === 0) {
      this.first = this.first.next;
      delete p.next;
      delete p.data;
    } else if (pos > 0) {
      let q = null;
      for (let i = 0; i < pos - 1 && p; i++) {
        q = p;
        p = p.next;
      }
      if (p) {
        q.next = p.next;
        delete p.next;
        delete p.data;
      }
    }
  }

  // METHOD: 'deleteDuplicatesFromSorted' removes the duplicated elements in the list.
  // P.S. Make sure that Linked List must be sorted...
  deleteDuplicatesFromSorted() {
    let q = this.first;
    let p = this.first.next;
    while (p) {
      if (p.data !== q.data) {
        q = p;
        p = p.next;
      } else {
        q.next = p.next;
        delete p.data;
        delete p.next;
        p = q.next;
      }
    }
  }

  // METHOD: 'isSorted' checks the List if sorted or not...
  isSorted() {
    let p = this.first;
    let x = Number.NEGATIVE_INFINITY;
    while (p) {
      if (p.data < x) return false;
      x = p.data;
      p = p.next;
    }
    return true;
  }

  // METHOD: 'reverseByData' make reverse by swapping the data in the list
  // P.S. It uses auxillary array...
  reverseByData() {
    let p = this.first;
    let auxillaryArr = [];
    let i = 0;

    while (p) {
      auxillaryArr[i++] = p.data;
      p = p.next;
    }

    p = this.first;
    i--;
    while (p) {
      p.data = auxillaryArr[i--];
      p = p.next;
    }
  }

  // METHOD: 'reverseByLink' make reverse by redirecting the link to the previous child...
  reverseByLink() {
    let r, q;
    let p = this.first;
    while (p) {
      r = q;
      q = p;
      p = p.next;
      q.next = r;
    }
    this.first = q;
  }

  // METHOD: 'concat' just appends the second list to the first one.
  concat(second) {
    let p = this.first;
    while (p.next != null) {
      p = p.next;
    }
    p.next = second.first;
    second.first = null;
  }

  // METHOD: 'merge' unites the two list as well as makes sort...
  merge(second) {
    let temp = new Node();
    let last;
    if (this.first.data < second.first.data) {
      temp = last = this.first;
      this.first = this.first.next;
      last.next = null;
    } else {
      temp = last = second.first;
      second.first = second.first.next;
      last.next = null;
    }
    while (this.first != null && second.first != null) {
      if (this.first.data < second.first.data) {
        last.next = this.first;
        last = this.first;
        this.first = this.first.next;
        last.next = null;
      } else {
        last.next = second.first;
        last = second.first;
        second.first = second.first.next;
        last.next = null;
      }
      last.next = this.first != null ? this.first : second.first;
    }
    this.first = temp;
  }

  // METHOD: 'isLoopList' checks if Linked list is looped or not, it means last child linked to the one of them, but the not to the first one.
  isLoopList() {
    let p, q;
    p = q = this.first;
    do {
      q = q.next;
      p = p.next;
      p = q != null ? q.next : null;
    } while (p && q && p != q);
    return p === q ? true : false;
  }
}
// End of LINKED LIST class

// And there are test:
let A = [8, 1, 2, 3, 4, 5];
let linkListA = new LinkedList(A, 5); // the new linked list A
// Executing the some of methods:
linkListA.display();
// INSERTING:
linkListA.insertAt(3, 2.5);
linkListA.display();

linkListA.insertLast(5);
linkListA.display();

// ADD THIS NEW ELEMENT IF THIS LINKED LIST IS SORTED
if (linkListA.isSorted()) {
  linkListA.insertInSorted(4.5);
  linkListA.display();
}
// REMOVING:
linkListA.delete(3);
linkListA.display();

linkListA.deleteDuplicatesFromSorted();
linkListA.display();
// REVERSING:
linkListA.reverseByLink();
linkListA.display();

linkListA.reverseByData();
linkListA.display();
// LENGTH OF Linked List => A
console.log(`LENGTH of LinkedListA is equal to: ${linkListA.getLength()}`);

let B = [15, 24, 37, 46, 50];
let linkListB = new LinkedList(B, 5); // the new linked list B
// CONCATENATING THE LinkedLists A with B:
console.log('\n\tCONCATENATING: A & B');
linkListA.concat(linkListB);
linkListA.display();
console.log(`LENGTH of LinkedListA now is equal to: ${linkListA.getLength()}`);

//------------------
let C = [2, 8, 10, 15];
let D = [4, 7, 12, 14];

let linkListC = new LinkedList(C, 4);
let linkListD = new LinkedList(D, 4);
// MERGING the lists C with D
console.log('\n\tMERGING: C & D');
linkListC.merge(linkListD);
linkListC.display();
linkListC.getLength();

console.log(`MIDDLE NODE IS: ${linkListC.findMiddleNode()}`);
