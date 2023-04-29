// Checking for ANAGRAM
const dec = 'decimal';
const med = 'medical';

isAnagram(dec, med);

// METHOD: To check is it Anagram
function isAnagram(A, B) {
  let Hash = new Array(26).fill(0);
  let i, j;

  for (i = 0; i < A.length; i++) {
    Hash[A.codePointAt(i) - 97]++;
  }

  console.log('\nIs it Anagram?');

  for (j = 0; j < B.length; j++) {
    Hash[B.codePointAt(j) - 97]--;

    if (Hash[B.codePointAt(j) - 97] < 0) {
      console.log('\tNo, it is not!');
      break;
    }

    if (j + 1 == B.length) {
      console.log('\tYes, it is!');
    }
  }
}
