/**
    https://leetcode.com/submissions/detail/728080468/
    Runtime: 112 ms, faster than 72.94% of JavaScript online submissions for Wiggle Sort II.
    Memory Usage: 48.2 MB, less than 42.35% of JavaScript online submissions for Wiggle Sort II.

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var wiggleSort = function(nums) {
    let arr = [...nums.sort((a,b)=>b-a)];
    let mid = (arr.length/2 != ~~(arr.length/2))? ~~(arr.length/2): (arr.length/2);
    let high = arr.slice(0, mid);
    let low = arr.slice(mid);
    
    for(let i=0; i<high.length; i++)
        nums[i*2+1] = high[i];
    for(let i=0; i<low.length; i++)
        nums[i*2] = low[i];
};