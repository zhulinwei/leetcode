/*
 * date: 2018-11-28
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/two-sum/ 
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * ```
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * ```  
 */

/*
 * 方法一：暴力法
 * 遍历数组中的每个元素，判断两数之和是否等于目标值，时间复杂度为O(n^2)，空间复杂度为O(1)
 */
const twoSum1 = function(nums, target) {
  const length = nums.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = length - 1; j > i; j--) {
      if (nums[i]+nums[j] === target) return [i, j];
    }
  }
};


/*
 * 方法二：哈希表
 * 哈希表查找元素所需的空间复杂度为O(1)，我们遍历数组的元素时，如果存在补充的元素则可直接在哈希表中获得索引，否则将当前元素及其索引存入哈希表中，时间复杂度为O(n)，空间复杂度为O(n)，注意所需的额外空间取决于哈希表中存储的元素数量
 */
const twoSum2 = function(nums, target) {
  const hash = new Map();
  for (let i = 0; i< nums.length; i++) {
    const complement = target - nums[i];
    if (hash.has(complement)) return [hash.get(complement), i];
    hash.set(nums[i], i);
  }
};

