/*
 * date: 2018-12-13
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/plus-one/
 *
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 * ```
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * ```
 *
 * Example 2:
 * ```
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * ```
 */


/*
 * 解法一：尾数加1
 * 如果小于9，尾数加1后直接返回；如果等于9则归0后让前一个元素加1；当遍历完还没有返回结果时，需要注意是因为需要拓展数组长度了
 */

const plusOne1 = function(digits) {
  if (!digits || digits.length < 1) return;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    if (digits[i] == 9) digits[i] = 0;
  }  
  if (digits[0] == 0) digits.unshift(1);
  return digits;
}
