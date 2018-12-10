/*
 * date: 2018-12-10
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/maximum-subarray/
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * Example:
 * ```
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * ```
 *
 * Follow up:
 * If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/*
 * 解法一：暴力穷举法
 * 
 */
const maxSubArray1 = function(nums) {
  if (!nums || nums.length < 1) return;
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let current = 0;
    for (let j = i; j < nums.length - 1; j++) {
      if (current > current + nums[j]) break;
      current += nums[j];
    }
    max = Math.max(current, max);
  }
  return max;
}
