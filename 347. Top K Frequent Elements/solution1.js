/**
    https://leetcode.com/submissions/detail/676982373/
    Runtime: 97 ms, faster than 68.55% of JavaScript online submissions for Top K Frequent Elements.
    Memory Usage: 45.4 MB, less than 62.19% of JavaScript online submissions for Top K Frequent Elements.

 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let obj = {};
    let arr = [];
    
    for(let num of nums)
        obj[num]? obj[num]++: obj[num]=1;
    
    let idx = 0;
    for(let property in obj)
        arr[idx++] = {
            num: property,
            feq: obj[property]
        };
    
    arr.sort((a,b)=>b.feq-a.feq);
    return arr.slice(0, k).map(x=>x.num);
};