/**
    O(n)
    75~97 ms     (44.85% ~ 80.83%)
    41.6~42.4 MB (7.82% ~ 91.53%)

    https://leetcode.com/submissions/detail/843599441/
        Runtime: 75 ms, faster than 80.83% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
        Memory Usage: 42.4 MB, less than 7.82% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
    https://leetcode.com/submissions/detail/843599772/
        Runtime: 89 ms, faster than 65.32% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
        Memory Usage: 41.7 MB, less than 83.70% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
    https://leetcode.com/submissions/detail/843599853/
        Runtime: 97 ms, faster than 44.85% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
        Memory Usage: 41.6 MB, less than 91.53% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.

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
    let num = 0;
    
    while(head){
        num = num << 1;
        num = num | head.val;
        head = head.next;
    }
    
    return num;
};