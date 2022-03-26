/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    
    while(right>=left){
        let mid = left + ~~((right-left) / 2);
        
        if(nums[mid]==target)
            return mid;
        
        nums[mid]>target? right=mid-1: left=mid+1;
    }
    
    return -1;
};