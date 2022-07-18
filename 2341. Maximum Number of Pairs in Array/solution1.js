/**
    https://leetcode.com/submissions/detail/749891695/
    Runtime: 58 ms, faster than 100.00% of JavaScript online submissions for Maximum Number of Pairs in Array.
    Memory Usage: 42.3 MB, less than 100.00% of JavaScript online submissions for Maximum Number of Pairs in Array.

 * @param {number[]} nums
 * @return {number[]}
 */
 var numberOfPairs = function(nums) {
    let hash = {};
    let pair = 0;
    let remain = 0;
    
    for(let num of nums)
        hash[num]? hash[num]++: hash[num]=1;
    
    for(let property in hash){
        pair += ~~(hash[property] / 2);
        remain += hash[property] % 2;
    }
    
    return [pair, remain];
};