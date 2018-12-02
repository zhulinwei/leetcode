/*
 * date: 2018-12-02
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/climbing-stairs/
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Note: Given n will be a positive integer.
 *
 * Example 1:
 * ```
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * ```
 *
 * Example 2:
 * ```
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * ```
 */

/*
 * 解法一：简单递归
 * 到第n阶楼梯的走法=到第n-1阶楼梯的走法+到第n-2阶楼梯的走法（因为此时最后一步可能在第n-1阶，也可能在第n-2阶），即：
 * f(n) = f(n-1) + f(n-2);
 * f(n-1) = f(n-2) + f(n-3);
 * f(n-2) = f(n-3) + f(n-4);
 * ...
 * f(2) = 2;
 * f(1) = 1;
 * 时间复杂度为O(2^n)，空间复杂度为O(n)
 */

const climbStairs1 = function (n) {
  if (!n || n <= 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
}


/*
 * 解法二：备忘录方法
 * 简单递归虽然可以解决问题，但如果n的值稍微变大，就可能出现堆栈溢出的情况，而且简单递归中出现大量重复的计算，白白浪费了不少资源，因此我们可以把计算结果存储到哈希表中，当下次遇到同样的计算过程时，我们选择从哈希表中获取而不是重新计算
 * 时间复杂度为O(n)，空间复杂度为O(n)
 */
const map = new Map();
const climbStairs2 = function (n) {
  if (!n || n <= 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (map.get(n)) return map.get(n);
  let result = climbStairs2(n - 1) + climbStairs2(n - 2);
  map.set(n, result);
  return result;
}

/*
 * 解法三：动态规划
 * 简单递归和备忘录方法，都是采用的是自顶向下的解法，即问题n的解决思路等于问题n-1与n-2的解决思路之和。除此之外，我们还可以采用迭代的方式自底向上解决问题，即：
 * f(1) = 1
 * f(2) = 2;
 * f(3) = f(2) + f(1) = 3
 * f(4) = f(3) + f(2) = 5
 * ...
 * 时间复杂度依然为O(n)，但空间复杂度已经降为O(1)了
 */
const climbStairs3 = function (n) {
  if (!n || n <= 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;
  let result = 0;
  let start = 1;
  let next = 2;
  for (let i = 3; i <= n; i++) {    
    result = start + next;
    start = next;
    next = result;  
  }
  return result;
}
