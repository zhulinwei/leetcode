/*
 * date: 2018-11-28
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/reverse-integer/
 * 
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example1
 * ```
 * Input: 123
 * Output: 321
 * ```
 *
 * Example2
 * ```
 * Input: -123
 * Output: -321
 * ```
 *
 * Example3
 * ```
 * Input: 120
 * Output: 21
 * ```
 * Note:
 * Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/*
 * 解法：在没辅助堆栈/数组的帮助下弹出和推入数字，我们可以使用数学方法，但需要注意是否有溢出
 */
const reverse = function(integer) {
  let reverse = 0;
  while(integer != 0) {
    if (integer < 0 && reverse < Math.pow(-2, 31) / 10) return 0;
    if (integer > 0 && reverse > (Math.pow(2, 31) -1) / 10) return 0;
    reverse = reverse * 10 + integer % 10;
    integer = integer > 0 ? Math.floor(integer / 10) : Math.ceil(integer / 10);
  }
  return reverse;
}
