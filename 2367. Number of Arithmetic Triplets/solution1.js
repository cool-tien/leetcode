/**
    O(n)
    70~93 ms
    42.7~42.9 MB

 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
 var arithmeticTriplets = function(nums, diff) {
    let count = 0;
    
    while(nums.length){
        let arr = [nums.shift()];
        let idx = 0;
        
        for(; idx<nums.length; idx++)
            if(arr[arr.length-1]+diff === nums[idx])
                arr.push(nums.splice(idx--, 1)[0]);
        
        if(arr.length >= 3)
            count += (arr.length - 2);
    }
    
    return count;
};