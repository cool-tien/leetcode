/**
    Time Complexity: O(n)
        81 ~ 95 ms          (19.81% ~ 57.32%)
    Space Complexity: O(1)
        55.56 ~ 55.59 MB    (16.38%)
    
    [Time taken: 11 m 12 s]
    https://leetcode.com/problems/maximum-average-subarray-i/submissions/1150333901/
        Runtime 81 ms Beats 57.32%; Memory 55.59 MB Beats 16.38%; 
    https://leetcode.com/problems/maximum-average-subarray-i/submissions/1150337539/
        Runtime 95 ms Beats 19.81%; Memory 55.56 MB Beats 16.38%; 
    https://leetcode.com/problems/maximum-average-subarray-i/submissions/1150338212/
        Runtime 92 ms Beats 23.33%; Memory 55.59 MB Beats 16.38%; 

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let arr = nums.slice(0, k);
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    let max_avg = sum / k;

    for(let i=k; i<nums.length; i++){
        sum = sum - nums[i - k] + nums[i];
        max_avg = Math.max(max_avg, (sum / k));
    }
    
    return max_avg;
};