/*
 * date: 2018-12-14
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/majority-element/
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * Example 1:
 * ```
 * Input: [3,2,3]
 * Output: 3
 * ```
 * Example 2:
 * ```
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 * ```
 */

/*
 * 解法一：排序
 * 由于题目说明数组不为空且一定存在众数，那么我们排序后索引n/2的值就一定是众数了！
 */

const majorityElement = function (nums) {
  return (nums.sort())[Math.floor(nums.length/2)];
}

/*
 * 解法二：哈希映射
 */
const majorityElement2 = function (nums) {
  let map = new Map();
  for (let num of nums) {
    let count = map.get(num);
    count = count ? ++count : 1;
    if (count > nums.length / 2) return num;
    map.set(num, count);
  }
  return 0;
}

/*
 * 解法三：摩尔投票法
 * 每次从序列里选择两个不相同的数字删除掉/抵消，最后剩下一个数字或几个相同的数字，就是出现次数大于总数一半的那个
 * 摩尔投票法的前提条件比较苛刻：1.确定有众数 2.众数的数量大于数组长度的一半
 */
const majorityElement3 = function (nums) {
  let majority;
  let count = 0;
  for (let num of nums) {
    if (count == 0) {
      majority = num;
      count = 1;
    } else {
      if (majority == num) count++;
      else count--;
    }
  }
  return majority;
}
