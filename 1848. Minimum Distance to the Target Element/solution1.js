/**
    Time Complexity: O(n)
        48 ~ 57 ms       (30.42% ~ 79.44%)
    Space Complexity: O(1)
        42.64 ~ 43.33 MB ( 7.89% ~ 25.92%)
    
    https://leetcode.com/problems/minimum-distance-to-the-target-element/submissions/1100477651/
        Runtime 48ms Beats 79.44%; Memory 43.33MB Beats  7.89%; 
    https://leetcode.com/problems/minimum-distance-to-the-target-element/submissions/1100479190/
        Runtime 57ms Beats 30.42%; Memory 42.89MB Beats 14.37%; 
    https://leetcode.com/problems/minimum-distance-to-the-target-element/submissions/1100479563/
        Runtime 52ms Beats 56.62%; Memory 42.64MB Beats 25.92%; 

 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let [left, right] = [start, start];
    
    while(left>=0 || right<nums.length){
        if((nums[left] || -1) === target)
            return Math.abs(start - left);
        if((nums[right] || -1) === target)
            return Math.abs(start - right);
        
        left--;
        right++;
    }
    
    return -1;
};