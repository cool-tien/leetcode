/**
    https://leetcode.com/submissions/detail/683538087/
    Runtime: 808 ms, faster than 21.45% of JavaScript online submissions for Merge Nodes in Between Zeros.
    Memory Usage: 150.7 MB, less than 31.21% of JavaScript online submissions for Merge Nodes in Between Zeros.

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
 var mergeNodes = function(head) {
    let result = null;
    let result_cur = null;
    let head_cur = head.next;
    
    while(head_cur!=null){
        let num = 0;
        
        while(head_cur.val!=0){
            num += head_cur.val;
            head_cur = head_cur.next;
        }
        
        if(result==null){
            result = new ListNode(num);
            result_cur = result;
        }
        else{
            result_cur.next = new ListNode(num);
            result_cur = result_cur.next
        }
        
        head_cur = head_cur.next;
    }
    
    return result;
};