/**
    Time Complexity: O(1)
        47 ~ 67 ms      (55.20% ~ 99.68%)
    Space Complexity: O(1)
        41.9 ~ 42.4 MB  (24.60% ~ 64.73%)
    
    https://leetcode.com/problems/count-distinct-numbers-on-board/submissions/890406253/
        Runtime 63 ms, Beats 72.82%; Memory 41.9 MB, Beats 64.73%
    https://leetcode.com/problems/count-distinct-numbers-on-board/submissions/890408290/
        Runtime 67 ms, Beats 55.20%; Memory 42.4 MB, Beats 24.60%
    https://leetcode.com/problems/count-distinct-numbers-on-board/submissions/890409009/
        Runtime 47 ms, Beats 99.68%; Memory 42.2 MB, eats 35.92%

 * @param {number} n
 * @return {number}
 */
const distinctIntegers = n => (n === 1)? 1: n - 1;