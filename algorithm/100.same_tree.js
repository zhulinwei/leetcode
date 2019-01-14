/*
 * date: 2019-01-14
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/same-tree/
 *
 * Given two binary trees, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 * Example 1:
 * ```
 * Input:
 *      1         1
 *     / \       / \
 *    2   3     2   3
 * 
 *   [1,2,3],   [1,2,3]
 * Output: true
 * ```
 * Example 2:
 * ```
 * Input:
 *       1         1
 *      /           \
 *     2             2
 * 
 *    [1,2],     [1,null,2]
 * 
 * Output: false
 * ```
 * Example 3:
 * ``` 
 * Input:
 *      1         1
 *     / \       / \
 *    2   1     1   2
 * 
 *   [1,2,1],   [1,1,2]
 *
 * Output: false
 * ```
 */

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/*
 * 解法一：递归
 */
const isSameTree1 = function (p, q) {
  function _isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val != q.val) return false;
    return _isSameTree(p.left, q.left) && _isSameTree(p.right, q.right);
  }
  return _isSameTree(p, q);
}

/*
 * 解法二：迭代
 */
const isSameTree2 = function (p, q) {
  let queue = [ [p, q] ];
  while (queue.length > 0) {
    let [ p, q ] = queue.shift();
    if (!p && !q) continue;
    if (!p || !q) return false;
    if (p.val != q.val) return false;
    if (p.left || q.left) queue.push([p.left, q.left]);
    if (p.right || q.right) queue.push([p.right, q.right]);
  }
  return true;
}
