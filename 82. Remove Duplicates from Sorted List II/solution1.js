/**
    https://leetcode.com/submissions/detail/701150180/
    Runtime: 79 ms, faster than 66.90% of JavaScript online submissions for Remove Duplicates from Sorted List II.
    Memory Usage: 44.8 MB, less than 21.38% of JavaScript online submissions for Remove Duplicates from Sorted List II.

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
 var deleteDuplicates = function(head) {
    let arr = [];
    
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    
    for(let i=0; i<arr.length-1; i++)
        if(arr[i] == arr[i+1]){
            let num = arr[i];
            let start = i;
            let count = 2;
            
            while(arr[start+count] == num)
                count++;
            arr.splice(start, count);
            i--;
        }
    
    let temp = null;
    while(arr.length)
        if(temp == null){
            head = new ListNode(arr.shift());
            temp = head;
        }
        else{
            temp.next = new ListNode(arr.shift());
            temp = temp.next;
        }
    return head;
};