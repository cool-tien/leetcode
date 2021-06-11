/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let bit = 0n;
    let res = [];
    
    for(let i=0; i<nums.length; i++){
        bit = bit*BigInt(2)+BigInt(nums[i]);
        res.push(bit%5n==0);
    }
    
    return res;
};