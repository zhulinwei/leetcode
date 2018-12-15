/*
 * date: 2018-12-14
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/add-binary/
 * Given two binary strings, return their sum (also a binary string).
 * The input strings are both non-empty and contains only characters 1 or 0.
 *
 * Example 1:
 * ```
 * Input: a = "11", b = "1"
 * Output: "100"
 * ```
 * Example 2:
 * ```
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * ```
 */

/*
 * 解法：将长度补齐后从后往前相加
 * 注意：不宜将二进制转为十进制相加后再转为二进制输出，因为当二进制的值较大时容易发生溢出的情况
 */

const addBinary = function(source1, source2) {
  let result = '';
  let shouldPlusOne = false;
  let length = Math.max(source1.length, source2.length);
  // 将短的输入长度补全
  while(source1.length < length) source1 = '0' + source1;
  while(source2.length < length) source2 = '0' + source2;
  while(length > 0) {
    length -= 1;
    let sum = parseInt(source1[length]) + parseInt(source2[length]);
    if (shouldPlusOne) {
      sum += 1;
      shouldPlusOne = false;
    }
    // sum的值可能为0、1、2、3
    if ((sum / 2) >= 1) shouldPlusOne = true;
    result = (sum % 2) + result;
  }
  if (shouldPlusOne) result = '1' + result;
  return result;
}

