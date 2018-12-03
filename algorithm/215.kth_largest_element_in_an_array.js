/*
 * date: 2018-12-03
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 *
 * Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Example 1:
 * ```
 * Input: [3,2,1,5,6,4] and k = 2
* Output: 5
 * ```
 * Example 2:
 * ```
 * Input: [3,2,3,1,2,4,5,5,6] and k = 4
 * Output: 4
 * ```
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 */

/*
 * 解法一：分治法
 * 可借助快排思想，但下面的实现不是正宗的快排实现，时间复杂度和空间复杂度都不理想，容易超出内存限制
 */
const findKthLargest1 = function (nums, k) {
  if (!nums || nums.length < 1) return;
  let pivot = nums[0];
  let left = nums.filter(num => num > pivot);
  let pivots = nums.filter(num => num == pivot);
  let right = nums.filter(num => num < pivot);

  let pivotStartIndex = left.length + 1;
  let pivotEndIndex = pivotStartIndex + pivots.length - 1;
  if (k < pivotStartIndex) return findKthLargest(left, k);
  if (k > pivotEndIndex) return findKthLargest(right, k - pivotEndIndex);
  return pivot;
}
 

/*
 * 解法二：小顶推
 */


/*
 * 解法三：大顶推
 */
