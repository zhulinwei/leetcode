/*
 * date: 2019-01-02
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Note: A leaf is a node with no children.
 * Example:
 * ```
 * Given binary tree [3,9,20,null,null,15,7],
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 * ```
 * return its depth = 3.
 */

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/*
 * 解法一：DFS深度优先/搜索（递归）
 * 分别求左右子树的高度，当前节点的高度就是左右子树中较大的那个+1
 * 开始递推
 * 1.H3 = 1 + max(H9, H20)
 * 2.H9 = 1 + max(0, 0) = 1; H20 = H15 + H7
 * 3.H15 = 1 + max(0, 0) = 1;H7 = 1 + max(0, 0) = 1;
 * 开始回溯
 * 4.H20 = 1 + 1 = 2;
 * 5.H3 = 1 + 2 = 3;
 * 时间复杂度：O(n)
 * 空间复杂度：极端情况下退化成链表，递归将会被调用N次（即树的高度），故所需额外空间为N，此时的空间复杂度为O(n)；最好情况下（即树完全平衡），空间复杂度为O(logN)
 */
const maxDepth1 = function (root) {
  if (!root) return 0;

  let leftHight = maxDepth(root.left);
  let rightHight = maxDepth(root.right);
  return Math.max(leftHight, rightHight) + 1;
  // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

