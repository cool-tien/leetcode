/**
	https://leetcode.com/submissions/detail/320514920/
	Runtime: 56 ms, faster than 99.80% of JavaScript online submissions for Merge Two Sorted Lists.
	Memory Usage: 35.5 MB, less than  of JavaScript online submissions for Merge Two Sorted Lists.
	
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
 }

var mergeTwoLists = function(l1, l2) {
    let cur,rs = null;
    
    while(l1!=null && l2!=null){
        if(rs==null){
            if(l1.val>l2.val){
                rs = new ListNode(l2.val);
                l2 = l2.next;
            }
            else{
                rs = new ListNode(l1.val);
                l1 = l1.next;
            }
            
            cur = rs;
        }
        else{
            if(l1.val>l2.val){
                cur.next = new ListNode(l2.val);
                l2 = l2.next;
            }   
            else{
                cur.next = new ListNode(l1.val);
                l1 = l1.next;
            }
            
            cur = cur.next;
        }
    }
    
    while(l1!=null){
        if(rs!=null){
            cur.next = new ListNode(l1.val);
            cur = cur.next;
        }
            
        else{
            rs = new ListNode(l1.val);
            cur = rs;
        }
        
        l1 = l1.next;
    }
    
    while(l2!=null){
        if(rs!=null){
            cur.next = new ListNode(l2.val);
            cur = cur.next;
        }
        else{
            rs = new ListNode(l2.val);
            cur = rs;
        }
        
        l2 = l2.next;
    }
    
    return rs;
};