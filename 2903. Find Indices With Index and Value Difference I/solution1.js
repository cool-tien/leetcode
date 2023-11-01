/**
    Time Complexity: O(n²)
        53 ~ 59 ms          (56.39% ~ 86.02%)
    Space Complexity: O(1)
        43.08 ~ 43.78 MB    (64.10% ~ 97.35%)
    
    https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/submissions/1088795837/
        Runtime 53ms Beats 86.02%; Memory 43.08MB Beats 97.35%; 
    https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/submissions/1088796851/
        Runtime 59ms Beats 56.39%; Memory 43.35MB Beats 89.88%; 
    https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/submissions/1088797560/
        Runtime 58ms Beats 63.13%; Memory 43.78MB Beats 64.10%; 

 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            const diff_index = Math.abs(i - j);
            const diff_value = Math.abs(nums[i] - nums[j]);
            
            if(diff_index >= indexDifference && diff_value >= valueDifference)
                return [i, j];
        }
    }
    
    return [-1, -1];
};