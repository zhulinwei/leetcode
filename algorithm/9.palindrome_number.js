/*
 * date: 2018-11-28
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/reverse-integer/
 * 
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 *
 * Example 1:
 * ```
 * Input: 121
 * Output: true
 * ```
 * Example 2:
 * ```
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * ```
 *
 * Example 3:
 * ```
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 * ```
 * /

/*
 * 方法一：将整数转换为数组反转后再合并为字符串，判断字符串的值与整数是否相同
 * 缺点：过多使用JavaScript语法糖导致无法体现算法价值
 */
const isPalindrome = function(integer) {
  return integer == integer.toString().split('').reverse().join('');
}

/*
 * 方法二：两头往中间扫
 */

