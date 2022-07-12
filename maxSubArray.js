/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let length = nums.length || 0;
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < length; i++) {
    for (let k = i; k < length; k++) {
      sum += nums[k];
      if (sum > max) max = sum;
    }
    sum = 0;
  }
  return max;
};

let arr1 = [
  -57, 9, -72, -72, -62, 45, -97, 24, -39, 35, -82, -4, -63, 1, -93, 42, 44, 1,
  -75, -25, -87, -16, 9, -59, 20, 5, -95, -41, 4, -30, 47, 46, 78, 52, 74, 93,
  -3, 53, 17, 34, -34, 34, -69, -21, -87, -86, -79, 56, -9, -55, -69, 3, 5, 16,  
];
let arr = maxSubArray(arr1);
console.log(arr);
