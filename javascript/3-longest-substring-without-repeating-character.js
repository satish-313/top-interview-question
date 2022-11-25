const lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let len = 0;
  let i = 0;

  for (let j=0; j<s.length; j++) {
    while(set.has(s[j])) {
      set.delete(s[i])
      i += 1
    }
    set.add(s[j])
    len = Math.max(len,(j-i+1))
  }

  return len
}

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))