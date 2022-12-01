const letterCombination = function (digits) {
  const result = [];
  const set = [];
  const keys = new Map();
  keys.set("2", ['a','b','c']);
  keys.set("3", ['d','e','f']);
  keys.set("4", ['g','h','i']);
  keys.set("5", ['j','k','l']);
  keys.set("6", ['m','n','o']);
  keys.set("7", ['p','q','r','s']);
  keys.set("8", ['t','u','v']);
  keys.set("9", ['w','x','y','z']);

  function backtrack(result, keys, digits, idx, set) {
    // return condition
    if (digits.length === set.length) result.push(set.join(""));
    if (digits.length <= set.length || digits.length <= idx) return;

    const nextLetter = keys.get(digits[idx]);

    for (let i = 0; i < nextLetter.length; i++) {
      set.push(nextLetter[i]);
      idx += 1;
      backtrack(result, keys, digits, idx, set);
      idx -= 1;
      set.pop();
    }
  }

  let firstLetter = keys.get(digits[0]);
  for (let ele of firstLetter) {
    set.push(ele);
    backtrack(result, keys, digits, 1, set);
    set.pop();
  }

  return result;
};

console.log(letterCombination("234"));
