/*
 * date: 2018-12-03
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/number-of-1-bits/
 *
 * Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).
 *
 * Example 1:
 * ```
 * Input: 00000000000000000000000000001011
 * Output: 3
 * Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
 * ```
 *
 * Example 2:
 * ```
 * Input: 00000000000000000000000010000000
 * Output: 1
 * Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
 * ```
 *
 * Example 3:
 * ```
 * Input: 11111111111111111111111111111101
 * Output: 31
 * Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 * ```
 */

/*
 * 解法一：位运算
 */
const hammingWeight1 = function (bits) {
  let count = 0;
  while (bits > 0) {
    // 1 在32位中的表示为：0000....001，所有和0相&的都是是0，所有我们bits&1只是判断bits的最后一位是不是1
    if ((bits & 1) == 1) count++;
    // 将bits的二进制表示向右移1位，丢弃被移出的位，并使用 0 在左侧填充
    bits = bits >>> 1;
  }
  return count;
}
