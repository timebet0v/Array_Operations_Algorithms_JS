let A = [2, 10, 18, 20, 24];
let B = [4, 9, 19, 25];

let C = Merge(A, B, A.length, B.length);
console.log('Merging A & B => ', C);

function Merge(A, B, m, n) {
  let i = 0,
    j = 0,
    k = 0;
  let C = [];

  while (i < m || j < n) {
    if (A[i] < B[j]) C[k++] = A[i++];
    else C[k++] = B[j++];
  }

  for (; i < m; i++) C[k++] = A[i];
  for (; j < n; j++) C[k++] = B[J];

  return C;
}
