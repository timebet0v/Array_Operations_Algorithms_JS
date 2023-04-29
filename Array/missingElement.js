// SORTED ARRAYS MISSING SINGLE ELEMENT
const arr1 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
const arr2 = [6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17];

missNum(arr1);
missNumDiff(arr2);

// Missing single number in sorted array by subtracting the summary of elements...
function missNum(array) {
  const n = array.length - 1;
  const sumOfArrByFormula = (array[n] * (array[n] + 1)) / 2;

  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += array[i];
  }

  const missingNumber = sumOfArrByFormula - sum;

  console.log('\nMETHOD: Summary subtracting');
  console.log(`\tMissing number in this array is: ${missingNumber}`);
}

// Missing single number in sorted array by checking the difference
function missNumDiff(array) {
  const low = array[0];
  const n = array.length;
  let diff = low - 0;

  console.log('\nMETHOD: Difference');
  for (let i = 0; i < n; i++) {
    if (array[i] - i != diff) {
      console.log(`\tMissing number in this array is: ${i + diff}`);
      break;
    }
  }
}
