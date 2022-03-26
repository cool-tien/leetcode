/**
	https://leetcode.com/submissions/detail/647832388/
	Runtime: 128 ms, faster than 94.18% of JavaScript online submissions for Sort List.
	Memory Usage: 61.1 MB, less than 12.84% of JavaScript online submissions for Sort List.
	
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
    for(let i=0; i<arr.length; i++)
       if(res==null){
            res = new ListNode(arr[i]);
            cur = res;
        }
        else{
            cur.next = new ListNode(arr[i]);
            cur = cur.next;
        }
    
    return res;
};