/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max_diff = -1;
    
    for(let i=0; i<nums.length-1; i++)
        for(let j=i+1; j<nums.length; j++){
            let diff = nums[j]-nums[i];
            
            if(diff>0 && diff>max_diff)
                max_diff = diff;
        }
    return max_diff;
};