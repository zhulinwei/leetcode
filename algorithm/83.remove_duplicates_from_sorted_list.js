/*
 * date: 2018-12-15
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 *
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 * 
 * Example 1:
 * ```
 * Input: 1->1->2
 * Output: 1->2
 * ```
 * Example 2:
 * ```
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 * ```
 */

function listNode(val, next) {
  this.val = val;
  this.next = next || null;
}

/* 
 * 解法一：指针扫描
 * 
 */

const deleteDuplicates1 = function(list) {
  if (!list || !list.next) return list;
  // 指针指向链表的头部
  let current = list;
  while (current && current.next) {
    // 通过比较结点与后一个结点是否通过，如果重复我们则改变当前结点的next指针，以便它跳过下一个结点并直接指向下一个结点
    if (current.val == current.next.val) current.next = current.next.next;
    else current = current.next;
  }
  return list;
}
