/*
 * date: 2018-12-26
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/rotate-array/
 *
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Example 1:
 * ```
 * Input: [1,2,3,4,5,6,7] and k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * ```
 * Example 2:
 * ```
 * Input: [-1,-100,3,99] and k = 2
 * Output: [3,99,-1,-100]
 * Explanation:
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 * ```
 * Note:
 * Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 */

/*
 * 解法一：创建新数组记录旋转后的位置
 * 空间复杂福为O(n)，时间复杂度为O(n)
 */
const rotate1 = function (nums, k) {
  const length = nums.length;
  let newNums = (new Array(length)).fill(0);
  for (let i = 0; i < length; i++) {
    let target = i + k;
    let value = nums[i];
    if (target < length) newNums[target] = value;
    else newNums[target%length] = value;
  }
  // 原本是直接返回新数组，但是测试不通过，之后改变原数组了
  for (let i = 0; i < length; i++) {
    nums[i] = newNums[i];
  }
} 

/*
 * 解法二：互换位置，该解法算是4种解法中最难理解的了
 */
const rotate3 = function(nums, k) {
  k %= nums.length;
  if (k == 0) return;

  for (let i = 1, j = 0; i <= nums.length; i += 1) {
    let target = (k * i + j) % nums.length;
    if (target === j) {
        j += 1;
        continue;
    }
    swap(nums, j, target);
  }
};

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

/*
 * 解法三：将最后一个元素移到第一位，重复k次（k如果大于nums.length则可取k%nums.length）
 */
const rotate3 = function (nums, k) {
  let count = k % nums.length;
  for (let i = 0; i < count; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
}

/*
 * 解法四：先将元素全部反转，再分别反转0- k-1 和 k-nums.length-1 的元素
 * 如数组[1,2,3,4]向右移动两个单位，我们可以先全部反转，即[4,3,2,1]，再反转0-1，即[3,4,2,1]，最后反转2-3，即[3,4,1,2]
 */

const reverse4 = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

const rotate = function (nums, k) {
  let pivot = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, pivot - 1);
  reverse(nums, pivot, nums.length - 1);
  return nums;
}
