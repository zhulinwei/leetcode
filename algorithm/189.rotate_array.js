/*
 * date: 2018-12-26
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/rotate-array/
 *
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Example 1:
 * ```
 * Input: [1,2,3,4,5,6,7] and k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * ```
 * Example 2:
 * ```
 * Input: [-1,-100,3,99] and k = 2
 * Output: [3,99,-1,-100]
 * Explanation:
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 * ```
 * Note:
 * Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 */

/*
 * 解法一：创建新数组记录旋转后的位置
 * 空间复杂福为O(n)，时间复杂度为O(n)
 */
const rotate1 = function (nums, k) {
  const length = nums.length;
  let newNums = (new Array(length)).fill(0);
  for (let i = 0; i < length; i++) {
    let target = i + k;
    let value = nums[i];
    if (target < length) newNums[target] = value;
    else newNums[target%length] = value;
  }
  // 原本是直接返回新数组，但是测试不通过，之后改变原数组了
  for (let i = 0; i < length; i++) {
    nums[i] = newNums[i];
  }
} 

/*
 * 解法二：互换位置
 */
const rotate2 = function (nums, k) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    let target = i + k < length ? i + k : (i + k) % length;
    let tem = num[target];
    num[target] = num[i];
    num[i] = num[target];
  }
}
