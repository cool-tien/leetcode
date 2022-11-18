/**
    O(n log n)
    68 ~ 84 ms      (13.25% ~ 89.16%)
    41.6 ~ 42.1 MB  (53.82% ~ 88.75%)

    https://leetcode.com/submissions/detail/845558401/
        Runtime: 116 ms, faster than 13.25% of JavaScript online submissions for Number of Distinct Averages.
        Memory Usage: 41.9 MB, less than 73.49% of JavaScript online submissions for Number of Distinct Averages.
    https://leetcode.com/submissions/detail/845559384/
        Runtime: 68 ms, faster than 89.16% of JavaScript online submissions for Number of Distinct Averages.
        Memory Usage: 42.1 MB, less than 53.82% of JavaScript online submissions for Number of Distinct Averages.
    https://leetcode.com/submissions/detail/845559468/
        Runtime: 84 ms, faster than 73.90% of JavaScript online submissions for Number of Distinct Averages.
        Memory Usage: 41.6 MB, less than 88.75% of JavaScript online submissions for Number of Distinct Averages.

 * @param {number[]} nums
 * @return {number}
 */
 var distinctAverages = function(nums) {
    let set = new Set();
    nums.sort((a, b) => a - b);
    
    while(nums.length){
        let avg = (nums.shift() + nums.pop()) / 2;
        set.add(avg);
    }
    
    return set.size;
};