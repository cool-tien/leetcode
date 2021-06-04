/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    nums.sort((a,b)=>a-b);
    let max = 0;
    
    for(let i=0; i<nums.length-1; i++){
        let tmp = nums[i+1]-nums[i];
        
        if(tmp>max)
            max = tmp;
    }
    
    return max;
};