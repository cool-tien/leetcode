/**
	https://leetcode.com/submissions/detail/647827034/
	Runtime: 806 ms, faster than 10.00% of JavaScript online submissions for Sort List.
	Memory Usage: 62.4 MB, less than 9.70% of JavaScript online submissions for Sort List.

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
var sortList = function(head) {
    let arr = [];
    let res = null;
    let cur = null;
    
    //  put data list to arr
    while(head!=null){
        arr.push(head.val);
        head = head.next;
    }
    //  sorting to ascending order
    arr.sort((a,b)=>a-b);
    
    //  build back to linked list
    while(arr.length)
        if(res==null){
            res = new ListNode(arr.shift());
            cur = res;
        }
        else{
            cur.next = new ListNode(arr.shift());
            cur = cur.next;
        }
    
    return res;
};