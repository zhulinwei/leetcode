/*
 * date: 2019-02-20
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/reverse-linked-list/
 * Reverse a singly linked list.
 * 
 * Example:
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * Follow up:
 * 
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
// 解法一：迭代（待优化）
const reverseList1 = function(head) {
    if (!head || !head.next) return head;
    let node1 = head;
    let node2 = head.next;
    let node3;
    while(node2) {
        node3 = node2.next;
        node2.next = node1;
        node1 = node2;
        node2 = node3;
    }
    head.next = null;
    head = node1;
    return head;
};
