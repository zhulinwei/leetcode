/*
 * date: 2019-01-06
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/invert-binary-tree/
 * Invert a binary tree.
 * Example:
 * ```
 * Input:
 *       4
 *     /   \
 *    2     7
 *   / \   / \
 *  1   3 6   9
 *  Output:
 *       4
 *     /   \
 *    7     2
 *   / \   / \
 *  9   6 3   1
 * ```
 */
 
//  Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

/*
 * 解法一：递归
 * 自顶向下不断左右反转节点
 * 时间复杂度为O(n);
 * 空间复杂度为O(n);
 */
const invertTree1 = function (root) {
  function _invertTree(root) {
    if (!root) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    if (root.left) _invertTree(root.left);
    if (root.right) _invertTree(root.right);
    return root;
  }
  return _invertTree(root);
}

/*
 * 解法二：迭代
 * 用队列记录需要反转的节点，轮询队列直到里面的节点为空为止
 * 时间复杂度为O(n)
 * 空间复杂度为O(n)
 */
const invertTree2 = function (root) {
  let queue = [ root ];
  while (queue.length > 0) {
    currentNode = queue.shift();
    if (!currentNode) continue;
    let temp = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = temp;
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return root;
}
