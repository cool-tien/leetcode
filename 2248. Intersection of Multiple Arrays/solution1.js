/**
    https://leetcode.com/submissions/detail/729190242/
    Runtime: 81 ms, faster than 75.17% of JavaScript online submissions for Intersection of Multiple Arrays.
    Memory Usage: 45.8 MB, less than 29.19% of JavaScript online submissions for Intersection of Multiple Arrays.

 * @param {number[][]} nums
 * @return {number[]}
 */
 var intersection = function(nums) {
    //  number of multiple arrays
    let len = nums.length;
    let obj = {};
    let arr = [];
    
    nums = nums.flat();
    
    for(let num of nums)
        obj[num]? obj[num]++: obj[num]=1;
    for(let num in obj)
        if(obj[num] == len)
            arr.push(num);
    return arr;
};