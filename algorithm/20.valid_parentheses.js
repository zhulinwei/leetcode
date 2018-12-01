/*
 * date: 2018-12-01
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/valid-parentheses/
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 1.Open brackets must be closed by the same type of brackets.
 * 2.Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 * Example 1:
 * ```
 * Input: "()"
 * Output: true
 * ```
 * Example 2:
 * ```
 * Input: "()[]{}"
 * Output: true
 * ```
 * Example 3:
 * ```
 * Input: "(]"
 * Output: false
 * ```
 * Example 4:
 * ```
 * Input: "([)]"
 * Output: false
 * ```
 * Example 5:
 * ```
 * Input: "{[]}"
 * Output: true
 * ```
 */

/*
 * 解法：栈
 * 类似这种栈、四则运算的题目，借助栈这个数据结构，都是明智的选择
 */

const isValid = function (brackets) {
  const map = new Map();
  map.set(')', '(');
  map.set(']', '[');
  map.set('}', '{');

  let stack = [];
  for (let i = 0; i < brackets.length; i++) {
    let bracket = brackets[i];
    if (!map.has(bracket)) {
      stack.push(bracket);
      continue;
    }
    let target = map.get(bracket);
    let resource = stack.pop();
    if (target != resource) return false;
  }
  return stack.length < 1;
}
 
