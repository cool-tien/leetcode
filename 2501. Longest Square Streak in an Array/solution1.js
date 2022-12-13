/**
    O(n)
    
    https://leetcode.com/contest/weekly-contest-323/problems/longest-square-streak-in-an-array/
    https://leetcode.com/problems/longest-square-streak-in-an-array/description/
    
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    let set = new Set(nums);
    let max = -1;
    
    for(let i=0; i<nums.length; i++){
        let square = nums[i];
        let count = 0;
        
        while(set.has(square)){
            square *= square;
            count++;
        }
        
        if(count >= 2 && count > max)
            max = count;
    }
    
    return max;
};