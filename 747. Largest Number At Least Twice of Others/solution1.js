/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = Math.max(...nums);
    let idx = nums.indexOf(max);
    nums = nums.filter(x=>x!=max);
    
    for(let num of nums)
        if(num*2>max)
            return -1;
    return idx;
};