/**
    O(2n log n)
    117~157 ms   (10.58%~62.43%)
    44.2~44.6 MB (40.74%~86.77%)
    
    https://leetcode.com/submissions/detail/818041265/
        Runtime: 151 ms, faster than 15.34% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
        Memory Usage: 44.2 MB, less than 86.77% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
    https://leetcode.com/submissions/detail/818043277/
        Runtime: 117 ms, faster than 62.43% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
        Memory Usage: 44.6 MB, less than 40.74% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
    https://leetcode.com/submissions/detail/818043477/
        Runtime: 157 ms, faster than 10.58% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
        Memory Usage: 44.5 MB, less than 46.03% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var minimumDifference = function(nums, k) {
    nums = nums.sort((a, b) => a-b);
    let min = nums[nums.length - 1];
    let end = nums.length - k;
    //  index of nums left and right
    let left = 0;
    let right = k - 1;
    
    for(; left<=end; left++, right++)
        min = Math.min(min, nums[right] - nums[left]);
    return min;
};