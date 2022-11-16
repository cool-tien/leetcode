/**
    O(1)
    121 ~ 140 ms    (61.68% ~ 80.00%)
    50.7 ~ 51.2 MB  (33.41% ~ 61.12%)

    https://leetcode.com/submissions/detail/844289595/
        Runtime: 140 ms, faster than 61.68% of JavaScript online submissions for Contains Duplicate.
        Memory Usage: 51.2 MB, less than 33.41% of JavaScript online submissions for Contains Duplicate.
    https://leetcode.com/submissions/detail/844298037/
        Runtime: 121 ms, faster than 80.00% of JavaScript online submissions for Contains Duplicate.
        Memory Usage: 50.7 MB, less than 61.12% of JavaScript online submissions for Contains Duplicate.
    https://leetcode.com/submissions/detail/844298129/
        Runtime: 128 ms, faster than 75.01% of JavaScript online submissions for Contains Duplicate.
        Memory Usage: 50.8 MB, less than 61.12% of JavaScript online submissions for Contains Duplicate.

 * @param {number[]} nums
 * @return {boolean}
 */
 const containsDuplicate = nums => nums.length !== new Set(nums).size;