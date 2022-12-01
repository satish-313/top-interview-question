const longestCommonPrefix = function (strs) {
  let s = strs[0];

  for (let str of strs) {
    let i = 0;

    while (i < str.length && i < s.length && str[i] === s[i]) {
      i += 1;
    }

    s = str.slice(0, i);
  }

  return s;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]))