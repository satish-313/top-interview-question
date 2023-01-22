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

// console.log(longestPalindromeBt("babad")); // O(n^3)
// console.log(longestPalindromeBt("cbbd")); // O(n^3)

function longestPalindrome(s) {
  let bestLen = 0;
  let bestStr = s[0];
  let n = s.length;

  for (let mid = 0; mid < n; mid++) {
    for (let x = 0; mid - x >= 0 && mid + x < n; x++) {
      if (s[mid - x] !== s[mid + x]) break;
      let len = 2 * x + 1;
      if (bestLen < len) {
        bestLen = len;
        bestStr = s.substr(mid - x, len);
      }
    }
  }

  for (let mid = 0; mid < n - 1; mid++) {
    for (let x = 1; mid - x + 1 >= 0 && mid + x < n; x++) {
      if (s[mid - x + 1] !== s[mid + x]) break;
      let len = 2 * x;

      if (bestLen < len) {
        bestLen = len;
        bestStr = s.substr(mid - x + 1,len);
      }
    }
  }

  return bestStr;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("ccd"))
