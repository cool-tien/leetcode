/**
    O(2n)
    90 ~ 104 ms     (96.36% ~ 100.00%)
    52.4 ~ 52.6 MB  (83.64% ~ 87.27%)

    https://leetcode.com/submissions/detail/854756115/
        Runtime: 104 ms, faster than 96.36% of JavaScript online submissions for Minimum Average Difference.
        Memory Usage: 52.6 MB, less than 83.64% of JavaScript online submissions for Minimum Average Difference.
    https://leetcode.com/submissions/detail/854758154/
        Runtime: 98 ms, faster than 98.18% of JavaScript online submissions for Minimum Average Difference.
        Memory Usage: 52.4 MB, less than 87.27% of JavaScript online submissions for Minimum Average Difference.
    https://leetcode.com/submissions/detail/854758982/
        Runtime: 90 ms, faster than 100.00% of JavaScript online submissions for Minimum Average Difference.
        Memory Usage: 52.5 MB, less than 87.27% of JavaScript online submissions for Minimum Average Difference.

 * @param {number[]} nums
 * @return {number}
 */
 var minimumAverageDifference = function(nums) {
    let l_total = 0;
    let r_total = nums.reduce((acc, num) => acc + num, 0);
    let min = Number.MAX_SAFE_INTEGER;
    let min_idx = 0;
    
    for(let i=0; i<nums.length; i++){
        l_total += nums[i];
        r_total -= nums[i];
        
        let l_avg = ~~(l_total / (i + 1));
        let r_avg = ~~(r_total / (nums.length - i - 1));
        let avg = Math.abs(l_avg - r_avg);
        
        if(min > avg){
            min = avg;
            min_idx = i;
        }
    }
    
    return min_idx;
};