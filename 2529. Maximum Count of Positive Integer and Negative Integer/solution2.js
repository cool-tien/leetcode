/**
    Time Complexity: O(2n)
        51 ~ 70 ms      (55.56% ~ 99.48%)
    Space Complexity: O(1)
        44.2 ~ 44.5 MB  (23.44% ~ 54.25%)
    
    https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/submissions/888449034/
        Runtime 68 ms, Beats 65.80%; Memory 44.5 MB, Beats 23.44%
    https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/submissions/888449524/
        Runtime 70 ms, Beats 55.56%; Memory 44.2 MB, Beats 54.25%
    https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/submissions/888449700/
        Runtime 51 ms, Beats 99.48%; Memory 44.3 MB, Beats 43.75%

 * @param {number[]} nums
 * @return {number}
 */
const maximumCount = nums => Math.max(nums.filter(x => x < 0).length, nums.filter(x => x > 0).length);