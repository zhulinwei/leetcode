/*
 * date: 2019-01-21
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.
 * Example 1:
 * ```
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 * ```
 * Example 2:
 * ```
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 * ```
 */
 
const findMedianSortedArrays = function (array1, array2) {
  let array = array1.concat(array2);
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    for (let j = i-1; j >= 0; j--) {
      if (array[j] > tempi) array[j+1] = array[j]
      else break;
      array[j+1] = temp;
    }
  }
  return array;
}
