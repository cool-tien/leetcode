/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var divideArray = function(nums) {
    let pair = nums.length / 2;
    let obj = {};
    
    for(let num of nums)
        obj[num]? obj[num]+=1: obj[num]=1;
    for(let property in obj)
        if(obj[property]%2!=0)
            return false;
    return true;
};