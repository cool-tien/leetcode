/**
    O(2n) | 78~111ms

    https://leetcode.com/submissions/detail/753401845/
    Runtime: 78 ms, faster than 75.65% of JavaScript online submissions for Partition List.
    Memory Usage: 44.5 MB, less than 5.80% of JavaScript online submissions for Partition List.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let less = [];
    let greater = [];
    let new_head = null;
    let cur = null;
    
    while(head){
        (head.val >= x)? greater.push(head.val): less.push(head.val);
        head = head.next;
    }
    
    for(let num of [...less, ...greater])
        if(!new_head){
            new_head = new ListNode(num);
            cur = new_head;
        }
        else{
            cur.next = new ListNode(num);
            cur = cur.next;
        }
    
    return new_head;
};