/**
    https://leetcode.com/submissions/detail/450371047/
    Runtime: 76 ms, faster than 55.09% of JavaScript online submissions for Remove Element.
    Memory Usage: 37.9 MB, less than 99.97% of JavaScript online submissions for Remove Element.

 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let last = nums.length - 1;
    
    for(let i=0; i<=last; i++)
        if(nums[i] === val){
            [nums[i], nums[last]] = [nums[last], nums[i]];
            i--;
            last--;
        }
    return last + 1;
};