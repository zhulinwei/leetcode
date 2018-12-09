/*
 * date: 2018-12-08
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/sqrtx/
 * Implement int sqrt(int x).
 * Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
 * Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
 *
 * Example 1:
 * ```
 * Input: 4
 * Output: 2
 * ```
 *
 * Example 2:
 * ```
 * Input: 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since 
 * the decimal part is truncated, 2 is returned.
 * ```
 */

/*
 * 解法一：暴力穷举法
 */
const mySqrt1 = function(integer) {
  for (let i = 0; i <= integer; i++) {
   if (i * i == integer) return i
   if (i * i > integer) return i-1;
  }
  return integer;
}
/*
 * 解法二：二分查找法
 * 比较中位数的平方与是否接近目标值，否则继续将中位数折半
 * 这道题目因为保证了输入值为非负整数，故算法比较简单，正常情况下还应考虑0-1之间的开方
 */
const mySqrt2 = function(integer) {
  if (integer == 0 || integer == 1) return integer;
  let left = 0;
  let middle = 0;
  let right = integer;
  while (left <= right) {
    middle = left + ((right - left) >> 1);
    let middleSquare = middle * middle;
    if (middleSquare < integer) {
      // 试探一下是否会越界（代码虽然不是最简洁但是可读性更佳）
      let next = middle + 1;
      if (next * next > integer) return middle;
      else left = next;
    }
    if (middleSquare == integer) return middle;
    if (middleSquare > integer) right = middle - 1;
     
  }
  return parseInt(middle);
}

/*
 * 解法三：牛顿迭代法
 * 牛顿迭代法可以快速逼近很多方程的解，自然可以用来开任意平方，根据数学公式:x(i+1) = (x(i) + n/x(i))/2，然后判断x(x+1)与x(i)是否无线接近即可
 */
const mySqrt3 = function(integer) {
  if (integer == 0 || integer == 1) return integer;
  let pre = 0;
  let cur = 1;
  do {
    pre = cur;
    cur = (pre + integer/pre)/2;
  } while(Math.abs(cur - pre) > 0.1);
  // 因为题目要求我们输出整数即可，故使用parseInt
  return parseInt(cur);
}
