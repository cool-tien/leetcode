/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var swapNodes = function(head, k) {
    let arr = [];
    let cur = head;
    let res = null;
    
    while(cur!=null){
        arr.push(cur.val);
        cur = cur.next;
    }
    
    //  swapping
    [arr[k-1], arr[arr.length-k]] = [arr[arr.length-k], arr[k-1]];
    
    for(let num of arr){
        if(res==null){
            res = new ListNode(num);
            cur = res;
        }
        else{
            cur.next = new ListNode(num);
            cur = cur.next;
        }
    }
    
    return res;
};