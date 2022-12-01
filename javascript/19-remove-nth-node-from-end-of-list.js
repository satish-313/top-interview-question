class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

const removeNthFromEnd = function (head, n) {
  let cur = head;
  let len = 0;

  while (cur) {
    len += 1;
    cur = cur.next;
  }
  if (len === 1) return null;
  if (len === n) return head.next;

  len = len - n - 1;
  cur = head;

  while (len--) {
    cur = cur.next;
  }
  cur.next = cur.next.next;

  return head;
};

console.log(removeNthFromEnd(a1, 2));
