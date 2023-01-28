/**
    Time Complexity: O(2n)
        57 ~ 62 ms      (72.60% ~ 88.92%)
    Space Complexity: O(1)
        42.0 ~ 42.3 MB  (10.46% ~ 48.94%)
    
    https://leetcode.com/problems/count-the-digits-that-divide-a-number/submissions/886778109/
        Runtime 57 ms, Beats 88.92%; Memory 42.0 MB, Beats 48.94%
    https://leetcode.com/problems/count-the-digits-that-divide-a-number/submissions/886798476/
        Runtime 62 ms, Beats 72.60%; Memory 42.3 MB, Beats 10.46%
    https://leetcode.com/problems/count-the-digits-that-divide-a-number/submissions/886800961/
        Runtime 58 ms, Beats 87.50%; Memory 42.0 MB, Beats 48.94%

 * @param {number} num
 * @return {number}
 */
const countDigits = num => (""+num).split("").filter(str => num % (+str) === 0).length;