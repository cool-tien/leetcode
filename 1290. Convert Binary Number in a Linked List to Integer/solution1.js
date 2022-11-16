/**
    O(n)
    91~95 ms     (49.28% ~ 60.89%)
    42.0~42.3 MB (27.51% ~ 53.85%)

    https://leetcode.com/submissions/detail/843590657/
        Runtime: 95 ms, faster than 49.28% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
        Memory Usage: 42.3 MB, less than 27.51% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
    https://leetcode.com/submissions/detail/843598105/
        Runtime: 91 ms, faster than 60.89% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
        Memory Usage: 42.1 MB, less than 53.85% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
    https://leetcode.com/submissions/detail/843598184/
        Runtime: 91 ms, faster than 60.89% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
        Memory Usage: 42 MB, less than 53.85% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    let s = "";
    
    while(head){
        s += head.val;
        head = head.next;
    }
    
    return parseInt(s, 2);
};