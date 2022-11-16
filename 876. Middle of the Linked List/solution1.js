/**
    O(n)
    50~98 ms     (40.99% ~ 99.72%)
    41.4~42.4 MB (16.18% ~ 97.45%)

    https://leetcode.com/submissions/detail/843593338/
        Runtime: 50 ms, faster than 99.72% of JavaScript online submissions for Middle of the Linked List.
        Memory Usage: 41.5 MB, less than 94.78% of JavaScript online submissions for Middle of the Linked List.
    https://leetcode.com/submissions/detail/843595880/
        Runtime: 98 ms, faster than 40.99% of JavaScript online submissions for Middle of the Linked List.
        Memory Usage: 41.4 MB, less than 97.45% of JavaScript online submissions for Middle of the Linked List.
    https://leetcode.com/submissions/detail/843596580/
        Runtime: 89 ms, faster than 63.35% of JavaScript online submissions for Middle of the Linked List.
        Memory Usage: 42.4 MB, less than 16.18% of JavaScript online submissions for Middle of the Linked List.

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
 var middleNode = function(head) {
    let arr = [];
    
    while(head){
        arr.push(head);
        head = head.next;
    }
    
    let mid = (arr.length % 2)? 
        ~~(arr.length / 2):
        arr.length / 2;
    
    return arr[mid];
};