/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let set = new Set();
    let res = [];
    
    for(let num of nums)
        set.has(num)?res.push(num):set.add(num);
    return res;
};