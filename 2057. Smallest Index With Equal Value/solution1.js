/**
    O(n)
    92~121 ms
    44.0~44.8 MB

 * @param {number[]} nums
 * @return {number}
 */
 var smallestEqual = function(nums) {
    for(let i=0; i<nums.length; i++)
        if(i%10 == nums[i]%10)
            return i;
    return -1;
};