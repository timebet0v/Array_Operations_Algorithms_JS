let A = [8, 5, 7, 3, 2];

console.log('BEFORE: ', A);
BubbleSort(A);
console.log('AFTER: ', A);

function BubbleSort(array) {
  let flag, i, j, temp;
  for (i = 0; i < array.length - 1; i++) {
    flag = 0;
    for (j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        flag = 1;
      }
    }
    if (flag === 0) return;
  }
}
