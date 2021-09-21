/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    for(let i=0; i<nums.length; i++){
        let left = nums.slice(0, i).reduce((acc, cur)=>acc+cur, 0);
        let right = nums.slice(i+1, nums.length).reduce((acc, cur)=>acc+cur, 0);
        
        if(left==right)
            return i;
    }
    
    return -1;
};