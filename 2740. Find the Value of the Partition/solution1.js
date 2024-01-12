/**
    Time Complexity: O(n log n)
        135 ~ 152 ms        (13.51% ~ 75.68%)
    Space Complexity: O(1)
        53.96 ~ 54.68 MB    (51.35% ~ 100%)

    https://leetcode.com/problems/find-the-value-of-the-partition/submissions/1143801448/
        Runtime 135 ms Beats 75.68%; Memory 54.53 MB Beats 59.46%; 
    https://leetcode.com/problems/find-the-value-of-the-partition/submissions/1143830203/
        Runtime 152 ms Beats 13.51%; Memory 54.68 MB Beats 51.35%; 
    https://leetcode.com/problems/find-the-value-of-the-partition/submissions/1143830700/
        Runtime 142 ms Beats 56.76%; Memory 53.96 MB Beats 100.00%; 

 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(nums) {
    nums.sort((a, b) => a - b);
    let min = Number.MAX_VALUE;
    let len = nums.length - 1;
    
    for(let i=0; i<len; i++)
        min = Math.min(min, (nums[i+1] - nums[i]));
    return min;
};