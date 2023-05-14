let A = [8, 5, 7, 3, 2];

console.log('BEFORE: ', A);
SelectionSort(A);
console.log('AFTER: ', A);

function SelectionSort(array) {
  let i, k, j;
  for (i = 0; i < array.length - 1; i++) {
    for (j = k = i; j < array.length; j++) {
      if (array[j] < array[k]) k = j;
    }
    let temp = array[i];
    array[i] = array[k];
    array[k] = temp;
  }
}
