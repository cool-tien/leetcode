/**
    O(3n)
    438 ~ 608 ms    (38.13% ~ 80.63%)
    85.5 ~ 112.2 MB (17.50% ~ 92.50%)

    https://leetcode.com/submissions/detail/853141695/
        Runtime: 608 ms, faster than 38.13% of JavaScript online submissions for Remove Nodes From Linked List.
        Memory Usage: 112 MB, less than 20.00% of JavaScript online submissions for Remove Nodes From Linked List.
    https://leetcode.com/submissions/detail/853151256/
        Runtime: 602 ms, faster than 40.00% of JavaScript online submissions for Remove Nodes From Linked List.
        Memory Usage: 112.2 MB, less than 17.50% of JavaScript online submissions for Remove Nodes From Linked List.
    https://leetcode.com/submissions/detail/853151327/
        Runtime: 438 ms, faster than 80.63% of JavaScript online submissions for Remove Nodes From Linked List.
        Memory Usage: 85.5 MB, less than 92.50% of JavaScript online submissions for Remove Nodes From Linked List.

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
 var removeNodes = function(head) {
    let arr = [];
    let res = [];
    let greater = 0;
    
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] >= greater){
            res.push(arr[i]);
            greater = arr[i];
        }
    }
    
    res = res.reverse();
    let new_head = null;
    let cur = null;
    
    for(let num of res)
        if(new_head === null){
            new_head = new ListNode(num);
            cur = new_head;
        }
        else{
            cur.next = new ListNode(num);
            cur = cur.next;
        }
    
    return new_head;
};