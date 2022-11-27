/* 
  charCodeAt("0") = 48 charCodeAt("9") = 57
  charCodeAt("+") = 43 charCodeAt("-") = 45
*/

const myAtoi = function (s) {
  s = s.trim();
  s = s.split(" ")[0];

  let isNegative = false;
  let isNumber = false;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) === 46) break;
    if (s[0].charCodeAt(0) >= 65 && s[0].charCodeAt(0) <= 90) break;
    if (s[0].charCodeAt(0) >= 97 && s[0].charCodeAt(0) <= 122) break;
    if (isNegative && !(s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57))
      break;

    if (
      (result === 0 && s[i].charCodeAt(0) === 43) ||
      (result === 0 && s[i].charCodeAt(0) === 45)
    ) {
      if (s[i].charCodeAt(0) === 45) isNegative = true;

      if (
        i + 1 < s.length &&
        !(s[i + 1].charCodeAt(0) >= 48 && s[i + 1].charCodeAt(0) <= 57)
      )
        return 0;
    }

    if (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57) {
      isNumber = true;
      result *= 10;
      result += s[i].charCodeAt(0) - 48;
    }
  }

  if (isNegative) result = -result;

  if (result === 0) return 0;
  if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  if (result < -Math.pow(2, 31)) return -Math.pow(2, 31);
  return result;
};

console.log(myAtoi("+00042")); // 42
console.log(myAtoi("    -0042")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("3.14159")); // -1
console.log(myAtoi("+-12"));
