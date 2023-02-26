const isValid = function (s) {
  const stack = [];
  const map = new Map();
  map.set(")", "(");
  map.set("]", "[");
  map.set("}", "{");

  for (let char of s) {
    if (map.has(char)) {
      if (stack.pop() !== map.get(char)) return false;
    } else stack.push(char);
  }

  return stack.length === 0;
};

// console.log(isValid("()"));
console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
