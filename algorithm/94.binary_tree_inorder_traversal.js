/*
 * date: 2019-01-04
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * 
 * Example:
 * ```
 * Input: [1,null,2,3]
 *  1
 *   \
 *    2
 *   /
 *  3
 * Output: [1,3,2]
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
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const inorderTraversal1 = function (root) {
  let result = [];
  if (!root) return result;
  function _inorderTraversal(root, result) {
    if (root.left) _inorderTraversal(root.left, result);
    result.push(root.val);
    if (root.right) _inorderTraversal(root.right, result);
    return result;
  }
  return _inorderTraversal(root, result);
}

/*
 * 解法二：迭代
 */
const inorderTraversal2 = function (root) {
  let result = [];
  let stack = [ root ];
  while(stack.length > 0) {
    let currentNode = stack.pop();
    if (!currentNode) continue;
    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.val) stack.push(currentNode.val);
    if (currentNode && !currentNode.val) result.push(currentNode);
    if (currentNode.left) stack.push(currentNode.left);
  }
  return result;
}

/*
 * 解法三：迭代的另一种写法
 */

const inorderTraversal3 = function (root) {
  let stack = [];
  let result = [];
  while (root || stack.length > 0) {
    // 左子树先全部押入栈中
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // 此时root已为null，我们从栈中取出新的节点
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
}
