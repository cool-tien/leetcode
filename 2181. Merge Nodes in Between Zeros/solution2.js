/**
    https://leetcode.com/submissions/detail/683550294/

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
    let arr = [];
    head = head.next;
    
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    
    let res = new ListNode(arr[0]);
    let cur = res;
    
    for(let i=1; i<arr.length-1; i++){
        if(arr[i]!=0)
            cur.val += arr[i];
        else{
            cur.next = new ListNode(arr[++i]);
            cur = cur.next;
        }
    }
    
    return res;
};