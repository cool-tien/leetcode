/**
	https://leetcode.com/problems/merge-two-sorted-lists/
	Runtime: 83 ms, faster than 75.90% of JavaScript online submissions for Merge Two Sorted Lists.
	Memory Usage: 44.8 MB, less than 6.58% of JavaScript online submissions for Merge Two Sorted Lists.
	
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let arr = [];
    let merge_list = null;
    let cur = null;
    
    while(list1!=null){
        arr.push(list1.val);
        list1 = list1.next;
    }
    while(list2!=null){
        arr.push(list2.val);
        list2 = list2.next;
    }
    
    arr.sort((a,b)=>a-b);
    for(let num of arr)
        if(merge_list==null){
            merge_list = new ListNode(num);
            cur = merge_list;
        }
        else{
            cur.next = new ListNode(num);
            cur = cur.next;
        }
        
    return merge_list;
};
