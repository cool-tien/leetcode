/**
    O(n log(n))
    66~120 ms    ( 9.62%~93.80%)
    41.2~41.9 MB (85.81%~99.84%)

    https://leetcode.com/submissions/detail/826290794/
        Runtime: 120 ms, faster than 9.62% of JavaScript online submissions for Find Subarrays With Equal Sum.
        Memory Usage: 41.2 MB, less than 99.84% of JavaScript online submissions for Find Subarrays With Equal Sum.
    https://leetcode.com/submissions/detail/826292083/
        Runtime: 66 ms, faster than 93.80% of JavaScript online submissions for Find Subarrays With Equal Sum.
        Memory Usage: 41.8 MB, less than 92.50% of JavaScript online submissions for Find Subarrays With Equal Sum.
    https://leetcode.com/submissions/detail/826292203/
        Runtime: 107 ms, faster than 29.04% of JavaScript online submissions for Find Subarrays With Equal Sum.
        Memory Usage: 41.9 MB, less than 85.81% of JavaScript online submissions for Find Subarrays With Equal Sum.

 * @param {number[]} nums
 * @return {boolean}
 */
 var findSubarrays = function(nums) {
    let i_end = nums.length - 2;
    let j_end = nums.length - 1;
    
    for(let i=0; i<i_end; i++){
        let i_total = nums[i] + nums[i+1];
        
        for(let j=i+1; j<j_end; j++){
            let j_total = nums[j] + nums[j+1];
            
            if(i_total === j_total)
                return true;
        }
    }
    
    return false;
};