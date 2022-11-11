/**
    O(n)
    159~176 ms   (25.74%~51.83%)
    46.3~46.9 MB (26.77%~88.93%)

    https://leetcode.com/submissions/detail/841066330/
        Runtime: 159 ms, faster than 51.83% of JavaScript online submissions for Move Zeroes.
        Memory Usage: 46.9 MB, less than 36.36% of JavaScript online submissions for Move Zeroes.
    https://leetcode.com/submissions/detail/841072316/
        Runtime: 167 ms, faster than 37.46% of JavaScript online submissions for Move Zeroes.
        Memory Usage: 46.3 MB, less than 88.93% of JavaScript online submissions for Move Zeroes.
    https://leetcode.com/submissions/detail/841072378/
        Runtime: 176 ms, faster than 25.74% of JavaScript online submissions for Move Zeroes.
        Memory Usage: 46.9 MB, less than 26.77% of JavaScript online submissions for Move Zeroes.

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let len = nums.length;
    let i = 0;
    
    while(i < len)
        if(nums[i] === 0){
            nums.push(nums.splice(i, 1)[0]);
            len--;
        }
        else
            i++;
};