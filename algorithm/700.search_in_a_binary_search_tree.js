/*
 * date: 2019-01-07
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
 *
 * Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
 * For example,
 * ```
 * Given the tree:
 *      4
 *     / \
 *    2   7
 *   / \
 *  1   3
 * 
 * And the value to search: 2
 * You should return this subtree:
 *    2
 *   / \
 *  1   3
 *  ```
 * In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.
 * Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.
 */
 

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/*
 * 解法一：递归
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 */
const searchBST1 = function (root, val) {
  function _searchBST (root, val) {
    if (!root) return null;
    if (root.val == val) return root;
    return _searchBST(root.left, val) || _searchBST(root.right, val);
  }
  if (!root) return [];
  else return _searchBST(root, val);
}

/*
 * 解法二：递归的优化版
 * 在解法一中我们忽略了一个很重要的先提条件，该二叉树是二叉搜索树，其特性为：右子节点值>节点值>左子节点值，因为我们在找不到目标值时没有必要再次搜索它的左子树和右子树
 */
const searchBST2 = function (root, val) {
  function _searchBST(root) {
    if (!root) return null;
    if (root.val == val) return root;
    if (root.val > val) return _searchBST(root.left, val);
    if (root.val < val) return _searchBST(root.right, val);
  }
  if (!root) return [];
  else return _searchBST(root, val);
}

/*
 * 解法三：迭代
 * 时间复杂度为O(n)
 * 空间复杂度为O(n)
 */
const searchBST3 = function (root, val) {
  if (!root) return [];
  let queue = [ root ];
  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (!currentNode) return null;
    if (currentNode.val == val) return currentNode;
    if (currentNode.val > val) queue.push(currentNode.left);
    if (currentNode.val < val) queue.push(currentNode.right);
  }
}

