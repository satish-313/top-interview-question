const threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j += 1;
        k -= 1;
        while (j < k && nums[j] === nums[j - 1]) j += 1;
        while (k > j && nums[k + 1] === nums[k]) k -= 1;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k -= 1;
      } else {
        j += 1;
      }
    }
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) i += 1;
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0]))
console.log(threeSum([-2, 0, 0, 2, 2]));
