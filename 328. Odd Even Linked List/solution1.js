/**
    O(n)
    75 ~ 82 ms  (87.80% ~ 94.41%)
    44.1 MB     (90.74% ~ 93.83%)

    https://leetcode.com/problems/odd-even-linked-list/submissions/855307667/
        Runtime 77 ms Beats 92.86%; Memory 44.1 MB Beats 93.83%
    https://leetcode.com/problems/odd-even-linked-list/submissions/855317176/
        Runtime 75 ms Beats 94.41%; Memory 44.1 MB Beats 93.83%
    https://leetcode.com/problems/odd-even-linked-list/submissions/855317865/
        Runtime 82 ms Beats 87.80%; Memory 44.1 MB Beats 90.74%

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
 var oddEvenList = function(head) {
    if(!head) return null;

    let odd_head = head;
    let odd_cur = head;
    let even_head = head.next;
    let even_cur = head.next;
    
    while(odd_cur.next !== null && even_cur.next !== null){
        let odd_next = odd_cur.next.next;
        let even_next = even_cur.next.next;
        
        odd_cur.next = odd_next;
        odd_cur = odd_cur.next;
        even_cur.next = even_next;
        even_cur = even_cur.next;
    }

    odd_cur.next = even_head;
    return odd_head;
};