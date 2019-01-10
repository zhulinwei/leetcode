/*
 * date: 2019-01-07
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/binary-tree-paths/
 * Given a binary tree, return all root-to-leaf paths.
 * Note: A leaf is a node with no children.
 * Example:
 * ```
 * Input:
 *    1
 *  /   \
 * 2     3
 *  \
 *   5
 * Output: ["1->2->5", "1->3"]
 * ```
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
 */

 // Definition for a binary tree node.
 function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
 }
 
/*
 * 解法一：递归
 * 判断是否有左子树或右子树，有则继续拼接路径，无则将路径汇总
 * 时间复杂度为O(n)
 * 空间复杂度为O(n)
 */
const binaryTreePaths1 = function (root) {
  function _binaryTreePaths(root, paths = [], path = '') {
    path = path ? `${path}->${root.val}` : `${root.val}`
    if (!root.left && !root.right) paths.push(path);
    if (root.left) _binaryTreePaths(root.left, paths, path);
    if (root.right) _binaryTreePaths(root.right, paths, path);
  } 
  let path = '';
  let paths = [];
  if (!root) return paths;
  _binaryTreePaths(root, paths, path);
  return paths;
}


/*
 * 解法二：迭代
 * 判断是否有左子树或右子树，有则继续拼接路径，无则将路径汇总
 * 时间复杂度为O(n)
 * 空间复杂度为O(n)
 */
const binaryTreePaths2 = function (root) {
  let paths = [];
  if (!root) return paths;
  let queue = [ [root, '']];
  while (queue.length > 0) {
    let [ currentNode, path ] = queue.shift();
    path = path ? `${path}->${currentNode.val}` : `${currentNode.val}`;
    if (!currentNode.left && !currentNode.right) paths.push(path);
    if (currentNode.left) queue.push([ currentNode.left, path ]);
    if (currentNode.right) queue.push([ currentNode.right, path ]);
  }
  return paths;
}
