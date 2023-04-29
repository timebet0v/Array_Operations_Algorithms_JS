// SORTED ARRAY MISSING MULTIPLE ELEMENTS
const arr3 = [6, 7, 8, 9, 11, 12, 15, 16, 17, 18, 19];

missNumsDiff(arr3);

// UNSORTED ARRAY MISSING MULTIPLE ELEMENTS
const arr4 = [3, 7, 4, 9, 12, 6, 1, 11, 2, 10];

missNumsHash(arr4, 12, 1);

// Missing multiple numbers in sorted array by checking the difference
function missNumsDiff(array) {
  const low = array[0];
  const n = array.length;
  let diff = low - 0;

  console.log('\nMETHOD: Difference');
  for (let i = 0; i < n; i++) {
    if (array[i] - i != diff) {
      while (diff < array[i] - i) {
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

  console.log('\nMETHOD: Hash');
  for (let j = low; j < Hash.length; j++) {
    if (Hash[j] == 0) {
      console.log(`\tMissing number in this array is: ${j}`);
    }
  }
}
