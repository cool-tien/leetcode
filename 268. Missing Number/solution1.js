/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let miss = nums.length;
    nums.sort((a,b) => a-b);
    
    for(let i=0; i<nums.length; i++)
        if(i != nums[i])
            return i;
    return miss;
};