/**
    Time Complexity: O(n)
        48 ~ 72 ms      (?%)
    Space Complexity: O(1)
        43.4 ~ 43.7 MB  (?%)
    
    https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/submissions/1027188760/
        Runtime 48 ms, Beats ?%; Memory 43.4 MB, Beats ?%; 
    https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/submissions/1027195212/
        Runtime 72 ms, Beats ?%; Memory 43.6 MB, Beats ?%; 
    https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/submissions/1027195550/
        Runtime 58 ms, Beats ?%; Memory 43.7 MB, Beats ?%; 

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count = 0;
    let last_idx = nums.length - 1;

    for(let i=0; i<last_idx; i++)
        for(let j=i+1; j<nums.length; j++)
            if((nums[i] + nums[j]) < target)
                count++;
    return count;
};