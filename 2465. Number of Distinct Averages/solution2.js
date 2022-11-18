/**
    O(n log n)
    69 ~ 109 ms     (22.89% ~ 87.95%)
    41.8 ~ 42.2 MB  (32.53% ~ 73.49%)

    https://leetcode.com/submissions/detail/845560589/
        Runtime: 96 ms, faster than 51.81% of JavaScript online submissions for Number of Distinct Averages.
        Memory Usage: 42.1 MB, less than 53.82% of JavaScript online submissions for Number of Distinct Averages.
    https://leetcode.com/submissions/detail/845562385/
        Runtime: 69 ms, faster than 87.95% of JavaScript online submissions for Number of Distinct Averages.
        Memory Usage: 41.8 MB, less than 73.49% of JavaScript online submissions for Number of Distinct Averages.
    https://leetcode.com/submissions/detail/845562500/
        Runtime: 109 ms, faster than 22.89% of JavaScript online submissions for Number of Distinct Averages.
        Memory Usage: 42.2 MB, less than 32.53% of JavaScript online submissions for Number of Distinct Averages.

 * @param {number[]} nums
 * @return {number}
 */
 var distinctAverages = function(nums) {
    let set = new Set();
    let left = 0;
    let right = nums.length - 1;
    nums.sort((a, b) => a - b);
    
    while(left < right){
        let avg = (nums[left++] + nums[right--]) / 2;
        set.add(avg);
    }
    
    return set.size;
};