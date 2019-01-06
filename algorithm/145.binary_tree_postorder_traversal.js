/*
 * date: 2019-01-05
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * Given a binary tree, return the postorder traversal of its nodes' values.
 * Example:
 * ```
 * Input: [1,null,2,3]
 *  1
 *   \
 *    2
 *   /
 *  3
 * Output: [3,2,1]
 * ```
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */ 

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/*
 * 解法一：递归
 */
const postorderTraversal1 = function(root) {
  if (!root) return [];
  function _postorderTraversal(root, result = []) {
    if (root.left) _postorderTraversal(root.left, result);
    if (root.right) _postorderTraversal(root.right, result);
    result.push(root.val);
    return result;
  }
  return _postorderTraversal(root, []);
};

/*
 * 解法二：迭代
 * 因为后序遍历的顺序是左子节点->右子节点->节点，所以我们可以先将节点值放入result中，然后将左子节点和右子节点押入栈中，在从栈中分别弹出来插到result的头部完成遍历
 */
const postorderTraversal2 = function (root) {
  let result = [];
  if (!root) return result;
  
  let stack = [ root ];
  while(root || stack.length > 0) {
    root = stack.pop();
    if (!root) continue;
    result.unshift(root.val);
    if (root.left) stack.push(root.left);
    if (root.right) stack.push(root.right);
  }
  return result;
}
