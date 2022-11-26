const longestPalindromeBt = function (s) {
  let output = s[0];
  let len = -Infinity;

  function isPalindrome(i, j) {
    while (i < j) {
      if (s[i] !== s[j]) return false;
      i += 1;
      j -= 1;
    }
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(i, j)) {
        if (j - i + 1 > len) {
          len = j - i + 1;
          output = s.substring(i, j + 1);
        }
      }
    }
  }

  return output;
};

console.log(longestPalindromeBt("babad")); // O(n^3)
console.log(longestPalindromeBt("cbbd")); // O(n^3)


/* 
    b a b a d
  b t f t 
  a 
  b
  a
  d
*/