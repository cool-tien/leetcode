/**
 *  https://leetcode.com/submissions/detail/666168604/
 *  Runtime: 78 ms, faster than 78.81% of JavaScript online submissions for Divide Array Into Equal Pairs.
 *  Memory Usage: 44.5 MB, less than 64.83% of JavaScript online submissions for Divide Array Into Equal Pairs.
 * @param {number[]} nums
 * @return {boolean}
 */
 var divideArray = function(nums) {
    let obj = {};
    
    nums.reduce((acc, num)=>{
        obj[num] = (obj[num] || 0) + 1;
    }, {});
    
    return !Object.values(obj).filter(val=>val%2 != 0).length;
};