let A = [8, 5, 7, 3, 2];

console.log('BEFORE: ', A);
InsertionSort(A);
console.log('AFTER: ', A);

function InsertionSort(array) {
  let i, j, x;
  for (i = 1; i < array.length; i++) {
    j = i - 1;
    x = array[i];
    while (j !== -1 && array[j] > x) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = x;
  }
}
