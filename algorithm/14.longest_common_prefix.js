/*
 * date: 2018-11-30
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/longest-common-prefix/
 * Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * ```
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * ```
 *
 * Example 2:
 * ```
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * ```
 * Note:
 * All given inputs are in lowercase letters a-z.
 */

/*
 * 解法一：水平扫描
 */

const longestCommonPrefix1 = function (strs) {
  if (strs.length < 1) return '';
  let commonPrefix = strs[0];
  for (let word = 1; word < strs.length; word++) {
    while(strs[word].indexOf(commonPrefix) != 0) {
      commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1);
    }
  }
  return commonPrefix;
}

/*
 * 解法二：分治法
 */
const commonPrefix = function (leftString = '',rightString  = '') {
  const min = Math.min(leftString.length, rightString.length);
  for (let i = 0; i < min; i++) {
    // 返回两个字符串相同的部分，即从下标0到下标i的字符
    if (leftString[i] != rightString[i]) return leftString.substring(0, i);
  }
  // 两个字符串的前缀相同，返回相同的部分
  return leftString.substring(0, min);
}

const longestCommonPrefix2 = function (strs) {
  if (!strs || strs.length < 1) return '';
  if (strs.length === 1) return strs[0];

  return execute(strs);
  function execute(strs) {
    let middle = Math.floor(strs.length/2);
    return commonPrefix(longestCommonPrefix2(strs.slice(0, middle)), longestCommonPrefix2(strs.slice(middle)))
  }
}

