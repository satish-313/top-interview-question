class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const a1 = new ListNode(2);
const a2 = new ListNode(4);
const a3 = new ListNode(3);
a1.next = a2;
a2.next = a3;

const b1 = new ListNode(5);
const b2 = new ListNode(6);
const b3 = new ListNode(4);
b1.next = b2;
b2.next = b3;

const addTwoNumbers = function (l1, l2) {
  const l = new ListNode(-1);
  let li = l;
  let next = 0;

  while (l1 || l2 || next) {
    const a = l1 ? l1.val : 0;
    const b = l2 ? l2.val : 0;

    let sum = a + b + next;
    if (sum >= 10) {
      next = Math.floor(sum / 10);
      sum = sum % 10;
    } else next = 0;

    li.next = new ListNode(sum);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    li = li.next;
  }

  return l.next;
};

console.log(addTwoNumbers(a1, b1));
