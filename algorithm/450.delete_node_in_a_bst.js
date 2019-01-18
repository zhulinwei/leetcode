/*
 * date: 2019-01-16
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/delete-node-in-a-bst/
 *
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
 * Basically, the deletion can be divided into two stages:
 * 
 * Search for a node to remove.
 * If the node is found, delete the node.
 * Note: Time complexity should be O(height of tree).
 * Example:
 * ``` 
 * root = [5,3,6,2,4,null,7]
 * key = 3
 * 
 *     5
 *    / \
 *   3   6
 *  / \   \
 * 2   4   7
 * Given key to delete is 3. So we find the node with value 3 and delete it.
 * 
 * One valid answer is [5,4,6,2,null,null,7], shown in the following BST.
 * 
 *     5
 *    / \
 *   4   6
 *  /     \
 * 2       7
 * 
 * Another valid answer is [5,2,6,null,4,null,7].
 * 
 *     5
 *    / \
 *   2   6
 *    \   \
 *     4   7
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
const deleteNode1 = function (root, key) {
  if (!root) return root;
  if (key == root.val) {
    if (!root.left && !root.right) return null;
    // 该节点只有左/右子树，则直接返回其子树
    if (!root.left || !root.right) return root.left || root.right;
    // 该节点有左右子树，则应该在其右子树中找出最小值
    let minNode = root.right;
    while(minNode.left) minNode = minNode.left;
    minNode.left = root.left;
    return root.right;
  }
  if (key < root.val) root.left = deleteNode(root.left, key);
  if (key > root.val) root.right = deleteNode(root.right, key);
  return root;
}
