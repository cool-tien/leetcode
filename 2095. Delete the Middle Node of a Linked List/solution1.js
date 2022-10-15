/**
    O(n)
    791~1101 ms (54.96%~93.91%)
    82.2~150 MB ( 5.13%~99.84%)
    
    https://leetcode.com/submissions/detail/822005188/
        Runtime: 1101 ms, faster than 54.96% of JavaScript online submissions for Delete the Middle Node of a Linked List.
        Memory Usage: 150 MB, less than 5.13% of JavaScript online submissions for Delete the Middle Node of a Linked List.
    https://leetcode.com/submissions/detail/822005253/
        Runtime: 791 ms, faster than 93.91% of JavaScript online submissions for Delete the Middle Node of a Linked List.
        Memory Usage: 82.2 MB, less than 99.84% of JavaScript online submissions for Delete the Middle Node of a Linked List.
    https://leetcode.com/submissions/detail/822006981/
        Runtime: 946 ms, faster than 69.07% of JavaScript online submissions for Delete the Middle Node of a Linked List.
        Memory Usage: 149.3 MB, less than 5.13% of JavaScript online submissions for Delete the Middle Node of a Linked List.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteMiddle = function(head) {
    if(!head.next) return null;
    
    let ptr = head;
    let arr = [];
    let i = 0;
    
    while(ptr){
        arr.push(ptr);
        ptr = ptr.next;
        i++;
    }
    
    let mid = ~~(i / 2) - 1;
    arr[mid].next = arr[mid].next.next;
    
    return head;
};