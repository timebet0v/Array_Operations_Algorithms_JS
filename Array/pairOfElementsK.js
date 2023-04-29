// UNSORTED ARRAY CONTAINS A PAIR OF ELEMENTS WITH SUM K => (A+B)=K
const arr7 = [6, 3, 8, 10, 16, 7, 5, 2, 9, 14];

pairElSumK(arr7, 10);
pariElSumKHash(arr7, 10, 16);

// SORTED ARRAY CONTAINS A PAIR OF ELEMENTS WITH SUM K => (A+B)=K
const arr8 = [1, 3, 4, 5, 6, 8, 9, 10, 12, 14];

pairElSumKTrav(arr8, 10);

// A pair of elements in an array with summary that equal to K
function pairElSumK(array, K) {
  const n = array.length - 1;
  let i, j;
  console.log('\nMETHOD: Traverse O(n^2)');
  for (i = 0; i < n - 1; i++) {
    for (j = i + 1; j < n; j++) {
      if (array[j] + array[i] === K) {
        console.log(`\t${array[j]} + ${array[i]} = ${K}`);
      }
    }
  }
}

// A pair of elements in an array with summary that equal to K by Hash
function pariElSumKHash(array, K, high) {
  const n = array.length;
  let Hash = new Array(high + 1).fill(0);
  console.log('\nMETHOD: Hash');
  for (let i = 0; i < n; i++) {
    let check = Hash[K - array[i]];
    if (check != 0 && check >= 0) {
      console.log(`\t${array[i]} + ${K - array[i]} = ${K}`);
    }
    Hash[array[i]]++;
  }
}

// A pair of elements in an array with summary that equal to K
function pairElSumKTrav(array, K) {
  const n = array.length;
  let i = 0,
    j = n - 1;

  console.log('\nMETHOD: Traverse');
  while (i < j) {
    if (array[i] + array[j] == K) {
      console.log(`\t${array[i]} + ${array[j]} = ${K}`);
      i++;
      j--;
    } else if (array[i] + array[j] < K) {
      i++;
    } else {
      j--;
    }
  }
}
