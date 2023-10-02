/**
    Time Complexity: O(n³)
        58 ~ 68 ms      (?%)
    Space Complexity: O(1)
        41.9 ~ 43.0 MB  (?%)
    
    https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/submissions/1064563811/
        Runtime 58 ms, Beats ?%; Memory 43.0 MB, Beats ?%; 
    https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/submissions/1064590089/
        Runtime 59 ms, Beats ?%; Memory 41.9 MB, Beats ?%; 
    https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/submissions/1064590865/
        Runtime 68 ms, Beats ?%; Memory 42.4 MB, Beats ?%; 
    
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let i_end = nums.length - 2;
    let j_end = nums.length - 1;
    let max = 0;

    for(let i=0; i<i_end; i++){
        for(let j=i+1; j<j_end; j++){
            for(let k=j+1; k<nums.length; k++){
                const value = (nums[i] - nums[j]) * nums[k];
                
                if(value > max)
                    max = value;
            }
        }
    }

    return max;
};