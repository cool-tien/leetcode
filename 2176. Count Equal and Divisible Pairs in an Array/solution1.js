/**
    O(n²)
    52 ~ 82 ms      (73.84% ~ 100.00%)
    41.6 ~ 42.5 MB  (38.74% ~ 98.34%)
    
    https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/submissions/863508329/
        Runtime 81 ms, Beats 73.84%; Memory 41.6 MB, Beats 98.34%
    https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/submissions/863508957/
        Runtime 52 ms, Beats 100.00%; Memory 42.5 MB, Beats 38.74%
    https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/submissions/863509143/
        Runtime 82 ms, Beats 73.84%; Memory 42.5 MB, Beats 48.68%

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let count = 0;
    
    for(let i=0; i<nums.length; i++)
        for(let j=i+1; j<nums.length; j++)
            if(nums[i] === nums[j] && ((i * j) % k === 0))
                count++;
    return count;
};