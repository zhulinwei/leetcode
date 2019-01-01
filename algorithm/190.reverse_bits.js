/*
 * date: 2019-01-01
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/reverse-bits/
 * Reverse bits of a given 32 bits unsigned integer.
 * Example 1:
 * ```
 * Input: 00000010100101000001111010011100
 * Output: 00111001011110000010100101000000
 * Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
 * ```
 * Example 2:
 * ```
 * Input: 11111111111111111111111111111101
 * Output: 10111111111111111111111111111111
 * Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10101111110010110010011101101001.
 * ```
 * Follow up:
 * If this function is called many times, how would you optimize it?
 */

const reverseBits = function (bits) {
  let reversedBits = 0;
  for (let i = 0; i < 32; i++) {
    reversedBits <<= 1;
    if (bits & 1 === 1) {
      reversedBits += 1;
    }
    bits >>= 1;
  }
  return reversedBits >>> 0; 
} 
