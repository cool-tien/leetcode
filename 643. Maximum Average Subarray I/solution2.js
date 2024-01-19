/**
    Time Complexity: O(n)
        76 ~ 87 ms          (34.30% ~ 77.29%)
    Space Complexity: O(1)
        54.31 ~ 54.52 MB    (64.85% ~ 77.21%)

    https://leetcode.com/problems/maximum-average-subarray-i/submissions/1150339924/
        Runtime 79 ms Beats 65.89%; Memory 54.52 MB Beats 64.85%; 
    https://leetcode.com/problems/maximum-average-subarray-i/submissions/1150341436/
        Runtime 87 ms Beats 34.30%; Memory 54.31 MB Beats 77.21%; 
    https://leetcode.com/problems/maximum-average-subarray-i/submissions/1150342327/
        Runtime 76 ms Beats 77.29%; Memory 54.39 MB Beats 77.21%; 

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let max = 0;

    for(let i=0; i<k; i++)
        sum += nums[i];
    max = sum;
    
    for(let i=k; i<nums.length; i++){
        sum = sum - nums[i - k] + nums[i];
        max = Math.max(max, sum);
    }
    
    return max / k;
};