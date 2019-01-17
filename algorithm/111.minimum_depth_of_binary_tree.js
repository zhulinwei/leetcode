/*
 * date: 2019-01-02
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * Note: A leaf is a node with no children.
 * Example:
 * ```
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its minimum depth = 2.
 */

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/*
 * 解法一：递归
 * 需要注意只有左子树或者右子树的情况，此时应该返回返回该子树（左/右）的长度
 */

const minDepth1 = function (root) {
  if (!root) return 0;
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  if (left && right) return Math.min(left, right) + 1;
  else return Math.max(left, right) + 1;
}

/*
 * 解法二：迭代
 * 如果该节点有左子树和右子树，则将左子树和右子树都加入队列中
 * 如果该节点只有左（右）子树，则将左（右）子树加入队列中
 * 如果该节点没有左右子树，那么该节点就是最短的路径终点
 */
const minDepth2 = function (root) {
  if (!root) return 0;
  let queue = [ [root, 1] ];
  while (queue.length > 0) {
    let [ currentNode, currentDepth ] = queue.shift();
    let leftNode = currentNode.left;
    let rightNode = currentNode.right;
    if (!leftNode && !rightNode) return currentDepth;
    if (leftNode && rightNode) queue.push([ leftNode, currentDepth + 1 ], [ rightNode, currentDepth + 1]);
    if (leftNode && !rightNode) queue.push([ leftNode, currentDepth + 1]);
    if (rightNode && !leftNode) queue.push([ rightNode, currentDepth + 1]);
  }
}

/*
 * 优化解法二
 */

const minDepth3 = function (root) {
  if (!root) return 0;
  let minDepth = 0;
  let queue = [ [root, 1] ];
  while (queue.length > 0) {
    let [ currentRoot, currentDepth ] = queue.shift();
    if (!currentRoot) continue;
    let leftRoot = currentRoot.left;
    let rightRoot = currentRoot.right;
    if (!(leftRoot && rightRoot)) return currentDepth + 1;
    queue.push([leftRoot, currentDepth + 1], [rightRoot, currentDepth + 1]);
  }
}
