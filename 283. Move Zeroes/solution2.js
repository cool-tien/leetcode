/**
    Time Complexity: O(n)
        75 ~ 86 ms          (30.80% ~ 68.05%)
    Space Complexity: O(1)
        53.71 ~ 54.46 MB    (5.01%)
    
    https://leetcode.com/problems/move-zeroes/submissions/1153106415/
        Runtime 75 ms Beats 68.05%; Memory 54.15 MB Beats 5.01%; 
    https://leetcode.com/problems/move-zeroes/submissions/1153109376/
        Runtime 86 ms Beats 30.80%; Memory 53.71 MB Beats 5.01%; 
    https://leetcode.com/problems/move-zeroes/submissions/1153117570/
        Runtime 84 ms Beats 35.31%; Memory 54.46 MB Beats 5.01%; 

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeros = 0;
    let i = 0;

    while((i + zeros) < nums.length){
        if(nums[i] === 0){
            nums.splice(i, 1);
            nums.push(0);
            
            zeros++;
        }
        else
            i++;
    }
};