const reverse = function (x) {
  let isNegative = false;
  let result = 0;

  if (x < 0) isNegative = true;
  x = Math.abs(x);

  while (x) {
    result = result * 10;
    result = result + (x % 10);
    x = Math.floor(x / 10);
  }

  if (isNegative)  result = -result
  
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) return 0;
  return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1534236469));
