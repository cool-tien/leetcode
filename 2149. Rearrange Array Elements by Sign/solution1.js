/**
    https://leetcode.com/submissions/detail/736377895/
    Runtime: 380 ms, faster than 96.28% of JavaScript online submissions for Rearrange Array Elements by Sign.
    Memory Usage: 87 MB, less than 98.76% of JavaScript online submissions for Rearrange Array Elements by Sign.

 * @param {number[]} nums
 * @return {number[]}
 */
 var rearrangeArray = function(nums) {
    let arr = new Array(nums.length);
    let even = 0;
    let odd = 1;
    
    for(let num of nums)
        if(num >= 0){
            arr[even] = num;
            even += 2;
        }
        else{
            arr[odd] = num;
            odd += 2;
        }
    return arr;
};