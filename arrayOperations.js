// SORTED ARRAYS MISSING SINGLE ELEMENTS
const arr1 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
const arr2 = [6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17];

missNum(arr1);
missNumDiff(arr2);

// SORTED ARRAY MISSING MULTIPLE ELEMENTS
const arr3 = [6, 7, 8, 9, 11, 12, 15, 16, 17, 18, 19];

missNumsDiff(arr3);

// UNSORTED ARRAY MISSING MULTIPLE ELEMENTS
const arr4 = [3, 7, 4, 9, 12, 6, 1, 11, 2, 10];

missNumsHash(arr4, 12, 1);

// SORTED ARRAY CONTAINS DUPLICATE ELEMENTS
const arr5 = [3, 6, 8, 8, 10, 12, 15, 15, 15, 20];

duplNums(arr5);
amountDuplNums(arr5);
duplNumsHash(arr5, 20);

// UNSORTED ARRAY CONTAINS DUPLICATE ELEMENTS
const arr6 = [8, 3, 6, 4, 6, 5, 6, 8, 2, 7];

amountDuplNumsUnHash(arr6, 8, 2);
amountDuplNumsUn(arr6);

// UNSORTED ARRAY CONTAINS A PAIR OF ELEMENTS WITH SUM K => (A+B)=K

const arr7 = [6, 3, 8, 10, 16, 7, 5, 2, 9, 14];
pairElSumK(arr7, 10);
pariElSumKHash(arr7, 10, 16);

// SORTED ARRAY CONTAINS A PAIR OF ELEMENTS WITH SUM K => (A+B)=K
const arr8 = [1, 3, 4, 5, 6, 8, 9, 10, 12, 14];

pairElSumKTrav(arr8, 10);

// UNSORTED ARRAY
const arr9 = [5, 8, 3, 9, 6, 2, 10, 7, -1, 4];

maxAmin(arr9);

// Checking for ANAGRAM
const dec = "decimal";
const med = "medical";

isAnagram(dec, med);

// METHODS … ------------------------------------------------------------------
// Missing single number in sorted array by subtracting the summary of elements...
function missNum(array) {
  const n = array.length - 1;
  const sumOfArrByFormula = array[n] * (array[n]+1) / 2;
  
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += array[i];
  }

  const missingNumber = sumOfArrByFormula - sum;
  
  console.log("\nMETHOD: Summary subtracting");
  console.log(`\tMissing number in this array is: ${missingNumber}`);
}

// Missing single number in sorted array by checking the difference
function missNumDiff(array) {
  const low = array[0];
  const n = array.length;
  let diff = low - 0;
  
  console.log("\nMETHOD: Difference");
  for (let i = 0; i < n; i++) {
    if (array[i] - i !=  diff) {
      console.log(`\tMissing number in this array is: ${i + diff}`);
      break;
    }
  }
}

// Missing multiple numbers in sorted array by checking the difference
function missNumsDiff(array) {
  const low = array[0];
  const n = array.length;
  let diff = low - 0;

  console.log("\nMETHOD: Difference");
  for (let i = 0; i < n; i++) {
    if (array[i] - i != diff) {
      while(diff < array[i] - i) {
        console.log(`\tMissing number in this array is: ${i + diff}`);
        diff++;
      }
    }
  }
}

// Missing multiple numbers in unsorted array by using hash
function missNumsHash(array, high, low) {
  const n = array.length;
  let Hash = new Array(high).fill(0);

  for (let i = 0; i < n; i++) {
    Hash[array[i]]++;
  }

  console.log("\nMETHOD: Hash");
  for (let j = low; j < Hash.length; j++) {
    if (Hash[j] == 0) {
      console.log(`\tMissing number in this array is: ${j}`);
    }
  }
}

// Duplicates in a sorted array by simple traversing
function duplNums(array) {
  const n = array.length;
  let lastDuplicate = 0;
  console.log("\nMETHOD: Simple Traverse");
  for (let i = 0; i < n-1; i++) {
    if (array[i] == array[i+1] && array[i] != lastDuplicate) {
      console.log(`\tDuplicate number in this array is: ${array[i]}`);
      lastDuplicate = array[i];
    }
  }
}

// Amount of duplicates in a sorted array
function amountDuplNums(array) {
  const n = array.length;
  console.log("\nMETHOD: Simple Traverse");
  for (let i = 0; i < n-1; i++) {
    if (array[i] == array[i+1]) {
      let j = i + 1;
      while (array[j] == array[i]) j++;
      console.log(`\t${array[i]} is appearing ${j-i} times.`);
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
  console.log("\nMETHOD: Hash");
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

  console.log("\nMETHOD: Simple Traverse O(n^2)");
  for (i=0; i < n-1; i++) {
    let count = 1;
    if (array[i] != -1) {
      for (j=i+1; j<n; j++) {
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
  let Hash = new Array(high+1).fill(0);

  for (let i = 0; i < n; i++) {
    Hash[array[i]]++;
  }

  console.log("\nMETHOD: Hash");
  for (let j = low; j < Hash.length; j++) {
    if (Hash[j] > 1) {
      console.log(`\t${j} is appearing ${Hash[j]} times.`);
    }
  }
}

// A pair of elements in an array with summary that equal to K
function pairElSumK(array, K) {
  const n = array.length - 1;
  let i, j;
  console.log("\nMETHOD: Traverse O(n^2)");
  for (i=0; i<n-1; i++) {
    for (j=i+1; j<n; j++) {
      if (array[j] + array[i] === K) {
        console.log(`\t${array[j]} + ${array[i]} = ${K}`);
      }
    }
  }
}

// A pair of elements in an array with summary that equal to K by Hash
function pariElSumKHash(array, K, high) {
  const n = array.length;
  let Hash = new Array(high+1).fill(0);
  console.log("\nMETHOD: Hash");
  for (let i=0; i<n; i++) {
    let check = Hash[K - array[i]];
    if (check != 0 && check >= 0) {
      console.log(`\t${array[i]} + ${K-array[i]} = ${K}`);
    }
    Hash[array[i]]++;
  }
}

// A pair of elements in an array with summary that equal to K
function pairElSumKTrav(array, K) {
  const n = array.length;
  let i=0, j=n-1;

  console.log("\nMETHOD: Traverse")
  while(i<j) {
    if (array[i] + array[j] == K) {
      console.log(`\t${array[i]} + ${array[j]} = ${K}`);
      i++;
      j--;
    } else if (array[i] + array[j] < K) {
      i++;
    } else {
      j--;
    }
  }
}

// Maximum and Minimum values in an array
function maxAmin(array) {
  const n = array.length;
  let max=array[0], min=array[0], i;

  for (i=0; i<n; i++) {
    let item = array[i];
    if (item > max) {
      max = item;
    } else if (item < min) {
      min = item;
    }
  }

  console.log("\nMETHOD: Traverse");
  console.log(`\tMax: ${max}\n\tMin: ${min}`);
}

// METHOD: To check is it Anagram
function isAnagram(A, B) {
  let Hash = new Array(26).fill(0);
  let i, j;

  for (i=0; i<A.length; i++) {
    Hash[A.codePointAt(i) - 97]++;
  }

  console.log("\nIs it Anagram?");

  for (j=0; j<B.length; j++) {
    Hash[B.codePointAt(j) - 97]--;

    if (Hash[B.codePointAt(j) - 97] < 0) {
      console.log("\tNo, it is not!");
      break;
    }

    if (j+1 == B.length) {
      console.log("\tYes, it is!");
    }
  }
}