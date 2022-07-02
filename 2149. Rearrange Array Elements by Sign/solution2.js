/**
    https://leetcode.com/submissions/detail/736404657/
    Runtime: 470 ms, faster than 68.18% of JavaScript online submissions for Rearrange Array Elements by Sign.
    Memory Usage: 111.1 MB, less than 5.37% of JavaScript online submissions for Rearrange Array Elements by Sign.

 * @param {number[]} nums
 * @return {number[]}
 */
 var rearrangeArray = function(nums) {
    let arr = [];
    let even = [];
    let odd = [];
    nums.map(x => 
        (x >= 0)? even.push(x): odd.push(x)
    );
    let len = even.length;
    
    for(let i=0; i<len; i++)
        arr.push(...[even[i], odd[i]]);
    return arr;
};