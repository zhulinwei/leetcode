/*
 * date: 2019-01-04
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 *
 * Given a binary tree, return the preorder traversal of its nodes' values.
 * Example:
 * ```
 * Input: [1,null,2,3]
 *  1
 *   \
 *    2
 *   /
 *  3
 * Output: [1,2,3]
 * ```
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/*
 * 解法一：深度优先搜索（递归）
 */
const preorderTraversal1 = function (root) {
  let result = [];
  if (!root) return result;
  function _preorerTraversal(root, result = []) {
    if (!root) return;
    result.push(root.val);
    if (root.left) _preorerTraversal(root.left, result);
    if (root.right) _preorerTraversal(root.right, result);
    return result;
  }
  return _preorerTraversal(root, result);
}

/*
 * 解法二：迭代
 * 先存储节点的值，然后借助栈的功能，先把右子节点押入栈中存起来，后放入左节点，最后再重复以上步骤
 */

const preorderTraversal2 = function (root) {
  let stack = [];
  let result = [];
  while (root || stack.length > 0) {
    result.push(root.val);
    if (root.right) stack.push(root.right);
    if (root.left) stack.push(root.left);
    root = stack.pop();
  }
  return result;
}
 
