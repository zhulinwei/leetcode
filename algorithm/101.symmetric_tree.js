/*
 * date: 2019-01-04
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/symmetric-tree/
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * ```
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * But the following [1,2,2,null,3,null,3] is not:
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 * ```
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 */

/* 
 * 解法一：递归
 * 时间复杂度为O(n)
 * 空间复杂度为O(n)
 */
const isSymmetric1 = function (root) {
  function _isSymmetric(leftNode, rightNode) {
    // 注意不要写成了if (!(leftNode && rightNode)) return true;
    if (leftNode == null && rightNode == null) return true;
    // 只有左节点或者只有右节点是不对称的
    if (leftNode && !rightNode) return false;
    if (rightNode && !leftNode) return false;
    // 左右节点值不相等也是不对称的
    if (leftNode.val != rightNode.val) return false;
    return _isSymmetric(leftNode.left, rightNode.right) && _isSymmetric(leftNode.right, rightNode.left);
  }
  if (!root) return true;
  else return _isSymmetric(root.left, root.right);
}

/*
 * 解法二：解法一的精简版
 */
const isSymmetric2 = function (root) {
  function _isSymmetric(leftNode, rightNode) {
    // 对称的空节点
    if (!leftNode && !rightNode) return true;
    // 不对称的节点
    if (!leftNode || !rightNode) return false;
    return leftNode.val == rightNode.val 
      && _isSymmetric(leftNode.left, rightNode.right) 
      && _isSymmetric(leftNode.right, rightNode.left);
  }
  if (!root) return true;
  else return _isSymmetric(root.left, root.right);
  // 或者你可以看成是在比较两棵树，即:_isSymmetric(root, root);
}

/*
 * 解法三：迭代
 * 我们可以利用队列进行迭代，相邻两个元素应该是相等的，队列中的初始值为[ root, root ]
 * 时间复杂度为O(n)
 * 空间复杂度为O(n)
 */
const isSymmetric3 = function (root) {
  let queue = [ root, root ];
  while (queue.length > 0) {
    let node1 = queue.shift();
    let node2 = queue.shift();
    if (!node1 && !node2) continue;
    if (!node1 || !node2) return false;
    if (node1.val != node2.val) return false;
    queue.push(node1.left, node2.right);
    queue.push(node1.right, node2.left);
  }
  return true;
}
