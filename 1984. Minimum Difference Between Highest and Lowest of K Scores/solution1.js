/**
    O(2n log n)
    118~132 ms   (39.68%~62.43%)
    44.2~44.5 MB (46.03%~75.13%)

    https://leetcode.com/submissions/detail/818022585/
        Runtime: 118 ms, faster than 62.43% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
        Memory Usage: 44.5 MB, less than 46.03% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
    https://leetcode.com/submissions/detail/818026970/
        Runtime: 132 ms, faster than 39.68% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
        Memory Usage: 44.2 MB, less than 75.13% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
    https://leetcode.com/submissions/detail/818027098/
        Runtime: 129 ms, faster than 46.56% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
        Memory Usage: 44.4 MB, less than 63.49% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var minimumDifference = function(nums, k) {
    nums = nums.sort((a, b) => a-b);
    let min = nums[nums.length - 1];
    let end = nums.length - k;
    
    for(let i=0; i<=end; i++){
        let high = nums[i + k - 1];
        let low = nums[i];
        let diff = high - low;
        
        if(min >= diff)
            min = diff;
    }
    
    return min;
};