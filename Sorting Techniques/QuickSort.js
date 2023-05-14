let A = [11, 13, 7, 12, 16, 9, 24, 5, 10, 3];

console.log('BEFORE: ', A);
QuickSort(A, 0, 10);
console.log('AFTER: ', A);

function QuickSort(array, low, high) {
  let j;
  if (low < high) {
    j = Partition(array, low, high);
    QuickSort(array, low, j);
    QuickSort(array, j + 1, high);
  }
}

function Partition(array, low, high) {
  let pivot = array[low];
  let i = low;
  let j = high;

  do {
    do {
      i++;
    } while (A[i] <= pivot);
    do {
      j--;
    } while (A[j] > pivot);
    if (i < j) [array[i], array[j]] = [array[j], array[i]];
  } while (i < j);
  [array[low], array[j]] = [array[j], array[low]];

  return j;
}
