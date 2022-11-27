const maxArea = function (heights) {
  let left = 0;
  let right = heights.length - 1;
  let max = 0;

  while (left < right) {
    max = Math.max(
      max,
      (right - left) * Math.min(heights[left], heights[right])
    );

    if (heights[left] > heights[right]) right -= 1;
    else if (heights[left] < heights[right]) left += 1;
    else {
      left += 1;
      right -= 1;
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
