/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var divideArray = function(nums) {
    let pair = nums.length / 2;
    let flag = true;
    let obj = {};
    
    obj = nums.reduce((acc, num)=>{
        obj[num] = (obj[num] || 0) + 1;
        return obj;
    }, {});
    
    Object.values(obj)..forEach(val=>{
        if(val%2 != 0)
            flag = false;
    });
    
    return flag;
};