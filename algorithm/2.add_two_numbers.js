/*
 * date: 2018-12-17
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/add-two-numbers/ 
 * 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Example:
 * ```
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807
 * ```
 * 补充描述：数字123以逆序3->2->1的方式存在链表中，即使是以普通数字的形式存储，我们也不能通过直接相加得出结果，因为会存在溢出的现象
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/*
 * 时间复杂度为O(max(m, n))，m和n分别代表list1和list2的长度
 * 1.将当前结点初始化为返回列表的哑结点。
 * 2.将进位 carrycarry 初始化为 00。
 * 3.将 pp 和 qq 分别初始化为列表 l1l1 和 l2l2 的头部。
 *  3.1遍历列表 l1l1 和 l2l2 直至到达它们的尾端。
 *  3.2将 xx 设为结点 pp 的值。如果 pp 已经到达 l1l1 的末尾，则将其值设置为 00。
 *  3.3将 yy 设为结点 qq 的值。如果 qq 已经到达 l2l2 的末尾，则将其值设置为 00。
 *  3.4设定 sum = x + y + carrysum=x+y+carry。
 *  3.5更新进位的值，carry = sum / 10carry=sum/10。
 *  3.6创建一个数值为 (sum \bmod 10)(summod10) 的新结点，并将其设置为当前结点的下一个结点，然后将当前结点前进到下一个结点。
 *  3.7同时，将 pp 和 qq 前进到下一个结点。
 * 4.检查 carry = 1carry=1 是否成立，如果成立，则向返回列表追加一个含有数字 11 的新结点。
 * 5.返回哑结点的下一个结点。
 */
const addTwoNumbers1 = function(list1, list2) {
  // 哑结点
  let sumList = new ListNode(0);
  // 将指针指向链表list1的头部
  let list1Pointer = list1;
  // 将指针指向链表list2的头部
  let list2Pointer = list2;
  // 进位
  let carry = 0;
  let currentPointer = sumList;
  while (list1Pointer || list2Pointer) {
    let listNode1Value = list1Pointer ? list1Pointer.val : 0;
    let listNode2Value = list2Pointer ? list2Pointer.val : 0;
    
    let sum = listNode1Value + listNode2Value + carry;
    carry = parseInt(sum / 10);
    currentPointer.next = new ListNode(sum % 10);
    currentPointer = currentPointer.next;
    
    if (list1Pointer) list1Pointer = list1Pointer.next;
    if (list2Pointer) list2Pointer = list2Pointer.next;
  }
  if (carry > 0) currentPointer.next = new ListNode(carry);
  // 返回哑结点后的数据
  return sumList.next;
};

/*
 * 解法二：不借助哑结点
 */
const addTwoNumbers2 = function(list1, list2) {
  let list1Pointer = list1;
  let list2Pointer = list2;
  let carry = 0;
  let sumList = new ListNode();
  let currentPointer = sumList;

  while(list1Pointer || list2Pointer) {
    let listNode1Value = list1Pointer ? list1Pointer.val : 0;
    let listNode2Value = list2Pointer ? list2Pointer.val : 0;

    let sum = listNode1Value + listNode2Value + carry;
    carry = parseInt(sum / 10);
    currentPointer.val = sum % 10;
    if (list1Pointer) list1Pointer = list1Pointer.next;
    if (list2Pointer) list2Pointer = list2Pointer.next;
    if (list1Pointer || list2Pointer) {
      currentPointer.next = new ListNode();
      currentPointer = currentPointer.next;
    }
  }
  if (carry > 0) currentPointer.next = new ListNode(carry);
  return sumList;
}
