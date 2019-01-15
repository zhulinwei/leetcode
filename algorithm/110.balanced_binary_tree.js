/*
 * date: 2019-01-15
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/balanced-binary-tree/
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as:
 * a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 * Example 1:
 * ``` 
 * Given the following tree [3,9,20,null,null,15,7]:
 * 
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * Return true.
 * ```
 * Example 2:
 * ```
 * Given the following tree [1,2,2,3,3,null,null,4,4]:
 * 
 *        1
 *       / \
 *      2   2
 *     / \
 *    3   3
 *   / \
 *  4   4
 * Return false.
 * ```
 */
 
/*
 * 解法一：递归
 * 检查每个节点的左子树高度和右子树的高度差
 */
const isBalanced = function (root) {
  function _depth (root) {
    if (!root) return 0;
    let left = _depth(root.left);
    let right = _depth(root.right);
    return Math.max(left, right) + 1;
  }
  function _isBalanced(root) {
    if (!root) return true;
    let left = _depth(root.left);
    let right = _depth(root.right);
    return Math.abs(left - right) <= 1 && _isBalanced(root.left) && _isBalanced(root.right);
  }
  if (!root) return true;
  return _isBalanced(root);
}

