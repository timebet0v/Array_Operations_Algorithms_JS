let A = [2, 10, 18, 20, 24];
let B = [4, 9, 19, 25];

let C = Merge(A, B);
console.log('Merging A & B => ', C);
// --------
let D = [8, 3, 1, 10, 24, 13, 100, 43, 20];
IMergeSort(D);
console.log('D: ', D);

let E = [11, 13, 7, 12, 16, 9, 24, 5, 10, 3];
RMergeSort(E, 0, E.length - 1);
console.log('Recursively merging: ', E);

// Merging 2 Lists
function Merge(A, B) {
  let i = 0,
    j = 0,
    m = A.length;
  n = B.length;
  k = 0;
  let C = [];

  while (i < m || j < n) {
    if (A[i] < B[j]) C[k++] = A[i++];
    else C[k++] = B[j++];
  }

  for (; i < m; i++) C[k++] = A[i];
  for (; j < n; j++) C[k++] = B[j];

  return C;
}

// Sorting with Merging in one list
function IMerge(array, low, mid, high) {
  let i = low;
  let j = mid + 1;
  let k = low;

  let B = [];
  while (i <= mid && j <= high) {
    if (array[i] < array[j]) B[k++] = array[i++];
    else B[k++] = array[j++];
  }

  for (; i <= mid; i++) B[k++] = array[i];
  for (; j <= high; j++) B[k++] = array[j];
  for (i = low; i <= high; i++) array[i] = B[i];
}

// Iterative Merging
function IMergeSort(array) {
  let p, i, low, mid, high;
  let n = array.length;

  for (p = 2; p <= n; p = p * 2) {
    for (i = 0; i + p - 1 < n; i = i + p) {
      low = i;
      high = i + p - 1;
      mid = Math.floor((low + high) / 2);
      IMerge(array, low, mid, high);
    }
    if (n - i > p / 2) {
      low = i;
      high = i + p - 1;
      mid = Math.floor((low + high) / 2);
      IMerge(array, low, mid, n - 1);
    }
  }
  if (p / 2 < n) IMerge(array, 0, Math.floor(p / 2) - 1, n - 1);
}

//Recursive Merging
function RMergeSort(array, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    RMergeSort(array, low, mid);
    RMergeSort(array, mid + 1, high);
    IMerge(array, low, mid, high);
  }
}
