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
 * 时间复杂度为O(n^2),空间复杂度为O(1);
 * 
 */

const maxSubArray1 = function(nums) {
  if (!nums || nums.length < 1) return;
  // 假设第一个元素就是最大值
  let max = nums[0];
  for (let i = 0; i <= nums.length - 1; i++) {
    // 将当前元素及其以后的全部元素加起来，这个过程会出现最大值，记录下来
    let sum = nums[i];
    let currentMax = nums[i];
    for (let j = i; j < nums.length - 1; j++) {
      sum += nums[j+1];
      currentMax = Math.max(currentMax, sum);
    }
    max = Math.max(currentMax, max);
  }
  return max;
}

/*
 * 解法二：扫描法
 * 判断和值是否大于0，是则继续添加下一位元素，否则将当前元素为起始值计算；
 * 时间复杂度为O(n)，空间复杂度为O(1)
 */
const maxSubArray2 = function(nums) {
  if (!nums || nums.legnth < 1) return;
  let current = 0;
  let max = nums[0];
  for (num of nums) {
    current = current < 0 ? num : current + num;
    max = Math.max(max, current);
  }
  return max;
}

/*
 * 解法三：动态规划
 * 假设数组为A，当前元素为i，最大连续元素为F(i)，则有递推公式：F(i) = Max(F(i-1) + A(i), A(i))
 * 时间复杂度为O(n), 空间复杂度为O(1)
 */
const maxSubArray3 = function(nums) {
  if (!nums || nums.legnth < 1) return;
    // 局部最优
  let localMax = nums[0];
  // 全局最优
  let globalMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    globalMax = Math.max(globalMax, localMax);
  }
  return globalMax;
}
