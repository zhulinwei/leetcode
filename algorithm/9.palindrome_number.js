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
 * 
 * Follow up:
 * Coud you solve it without converting the integer to a string?
 * ```
 * /

/*
 * 方法一：将整数转换为数组反转后再合并为字符串，判断字符串的值与整数是否相同
 * 缺点：过多使用JavaScript语法糖导致无法体现算法价值
 */
const isPalindrome1 = function (integer) {
  return integer == integer.toString().split('').reverse().join('');
}

/*
 * 方法二：两头往中间扫
 */
const isPalindrome2 = function (integer) {
  const string = integer.toString();
  const length = string.length;
  let left = 0;
  let right = length - 1;
  while(left <= right) {
    if (string[left] === string[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
}

/*
 * 进阶：不借助将整数转化为字符串的方式解决问题
 * 方案三：反转整数，但当反转整数中的全部元素时可能会出现溢出的情况，所以我们只反转一半的整数元素
 * 时间复杂度为 O(log{10}(n))，空间复杂度为O(1)
 */
const isPalindrome3 = function (integer) {
  // 负数与0结尾但非0的整数，不会是回文数
  if (integer < 0 || (integer % 10 == 0 && integer != 0)) return false;

  let reverse = 0;
  while(integer > reverse) {
    reverse = reverse * 10 + integer % 10;
    integer = integer / 10; 
  }
  // 当整数为偶数时（如1221），直接判断反转后的整数值（12）与当前整数值（12）是否相等
  // 当整数为奇数时（如121），可以令反转后的整数（12）除以10（得到1）后与当前整数值（1）比较是否相等
  return integer === reverse || integer === reverse / 10;
}
