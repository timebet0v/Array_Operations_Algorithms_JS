// UNSORTED ARRAY
const arr9 = [5, 8, 3, 9, 6, 2, 10, 7, -1, 4];

maxAmin(arr9);

// Maximum and Minimum values in an array
function maxAmin(array) {
  const n = array.length;
  let max = array[0],
    min = array[0],
    i;

  for (i = 0; i < n; i++) {
    let item = array[i];
    if (item > max) {
      max = item;
    } else if (item < min) {
      min = item;
    }
  }

  console.log('\nMETHOD: Traverse');
  console.log(`\tMax: ${max}\n\tMin: ${min}`);
}
