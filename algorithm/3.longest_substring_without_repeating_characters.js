/*
 * date: 2019-01-17
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/ 
 *
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * ```
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * ```
 * Example 2:
 * ```
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * ```
 * Example 3:
 * ```
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * ```
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/*
 * 解法一：滑动窗口
 * 维护一个窗口并逐步向右移动，当窗口右侧遇到重复重复元素时，窗口左侧不断删除元素直至没有重复元素
 * 时间复杂度为O(n)
 * 空间复杂度为O(n)
 */
const lengthOfLongestSubstring1 = function (string) {
  let left = 0;
  let right = 0;
  let length = 0;
  let window = new Set();
  while (right < string.length) {
    if (window.has(string.charAt(right))) window.delete(string.charAt(left++));
    else window.add(string.charAt(right++));
    length = Math.max(length, window.size);
  }
  return length;
}

/*
 * 解法二：滑动窗口优化版
 * 我们使用map维护这个窗口，当窗口的右侧遇到重复元素时，窗口的左侧直接跳过重复元素（而不是选择删除）
 * 个人倾向于使用解法一，简单易懂
 */
const lengthOfLongestSubstring2 = function (string) {
  let left = 0;
  let right = 0;
  let length = 0;
  let window = new Map();
  while (right < string.length) {
    if (window.get(string.charAt(right))) left = Math.max(window.get(string.charAt(right)), left);
    window.set(string.charAt(right), right + 1);
    length = Math.max(right - left + 1, length); 
    right += 1;
  }
  return length;
}
