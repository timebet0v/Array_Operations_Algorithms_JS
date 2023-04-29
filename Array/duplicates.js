// SORTED ARRAY CONTAINS DUPLICATE ELEMENTS
const arr5 = [3, 6, 8, 8, 10, 12, 15, 15, 15, 20];

duplNums(arr5);
amountDuplNums(arr5);
duplNumsHash(arr5, 20);

// UNSORTED ARRAY CONTAINS DUPLICATE ELEMENTS
const arr6 = [8, 3, 6, 4, 6, 5, 6, 8, 2, 7];

amountDuplNumsUnHash(arr6, 8, 2);
amountDuplNumsUn(arr6);

// Duplicates in a sorted array by simple traversing
function duplNums(array) {
  const n = array.length;
  let lastDuplicate = 0;
  console.log('\nMETHOD: Simple Traverse');
  for (let i = 0; i < n - 1; i++) {
    if (array[i] == array[i + 1] && array[i] != lastDuplicate) {
      console.log(`\tDuplicate number in this array is: ${array[i]}`);
      lastDuplicate = array[i];
    }
  }
}

// Amount of duplicates in a sorted array
function amountDuplNums(array) {
  const n = array.length;
  console.log('\nMETHOD: Simple Traverse');
  for (let i = 0; i < n - 1; i++) {
    if (array[i] == array[i + 1]) {
      let j = i + 1;
      while (array[j] == array[i]) j++;
      console.log(`\t${array[i]} is appearing ${j - i} times.`);
      i = j - 1;
    }
  }
}

// Duplicates in an array using Hash
function duplNumsHash(array, high) {
  const n = array.length;
  let Hash = new Array(high).fill(0);

  for (let i = 0; i < n; i++) {
    Hash[array[i]]++;
  }
  console.log('\nMETHOD: Hash');
  for (let j = 0; j < Hash.length; j++) {
    if (Hash[j] > 1) {
      console.log(`\tDuplicate number in this array is: ${j}`);
    }
  }
}

// Duplicates in unsorted array by traversing
function amountDuplNumsUn(array) {
  const n = array.length;
  let i, j;

  console.log('\nMETHOD: Simple Traverse O(n^2)');
  for (i = 0; i < n - 1; i++) {
    let count = 1;
    if (array[i] != -1) {
      for (j = i + 1; j < n; j++) {
        if (array[i] == array[j]) {
          count++;
          array[j] = -1;
        }
      }
      if (count > 1) {
        console.log(`\t${array[i]} is appearing ${count} times.`);
      }
    }
  }
}

// Duplicates in unsorted array by hash
function amountDuplNumsUnHash(array, high, low) {
  const n = array.length - 1;
  let Hash = new Array(high + 1).fill(0);

  for (let i = 0; i < n; i++) {
    Hash[array[i]]++;
  }

  console.log('\nMETHOD: Hash');
  for (let j = low; j < Hash.length; j++) {
    if (Hash[j] > 1) {
      console.log(`\t${j} is appearing ${Hash[j]} times.`);
    }
  }
}
