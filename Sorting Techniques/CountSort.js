let A = [6, 3, 9, 10, 15, 6, 8, 12, 3, 6];
console.log('BEFORE: ', A);
CountSort(A, 15);
console.log('AFTER: ', A);

function CountSort(array, max) {
  let i, j;
  let n = array.length;

  let C = [];
  for (i = 0; i < max + 1; i++) C[i] = 0;
  for (i = 0; i < n; i++) C[array[i]]++;
  i = 0;
  j = 0;
  while (i < max + 1) {
    if (C[i] > 0) {
      array[j++] = i;
      C[i]--;
    } else i++;
  }
}
