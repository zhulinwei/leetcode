/*
 * date: 2019-01-07
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/merge-two-binary-trees/
 * Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
 * You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.
 * Otherwise, the NOT null node will be used as the node of new tree.
 * Example 1:
 * ```
 * Input:
 * Tree 1     Tree 2
 *     1         2
 *    / \       / \
 *   3   2     1   3
 *  /           \   \
 * 5             4   7
 * Output:
 * Merged tree:
 *	     3
 *	    / \
 *	   4   5
 *	  / \   \
 *	 5   4   7
 */

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
 
/*
 * 解法一：递归
 */
const mergeTrees1 = function (t1, t2) {
  function _mergeTrees(t1, t2) {
    if (!t1 && !t2) return null;
    if (!t1 || !t2) return t1 || t2;
    let val  = t1.val + t2.val;
    let node = new TreeNode(val);
    node.left = _mergeTrees(t1.left, t2.left);
    node.right = _mergeTrees(t1.right, t2.right);
    return node;
  }
  return _mergeTrees(t1, t2);
}


