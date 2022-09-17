/**
    O(n)
    66~134 ms    (13.10%~98.01%)
    45.2~46.5 MB ( 5.31%~24.05%)

    https://leetcode.com/submissions/detail/801996652/
        Runtime: 66 ms, faster than 98.01% of JavaScript online submissions for Majority Element II.
        Memory Usage: 45.4 MB, less than 19.73% of JavaScript online submissions for Majority Element II.
    https://leetcode.com/submissions/detail/802001762/
        Runtime: 127 ms, faster than 18.24% of JavaScript online submissions for Majority Element II.
        Memory Usage: 46.5 MB, less than 5.31% of JavaScript online submissions for Majority Element II.
    https://leetcode.com/submissions/detail/802001926/
        Runtime: 134 ms, faster than 13.10% of JavaScript online submissions for Majority Element II.
        Memory Usage: 45.3 MB, less than 24.05% of JavaScript online submissions for Majority Element II.
    https://leetcode.com/submissions/detail/802002153/
        Runtime: 122 ms, faster than 24.88% of JavaScript online submissions for Majority Element II.
        Memory Usage: 45.2 MB, less than 24.05% of JavaScript online submissions for Majority Element II.

 * @param {number[]} nums
 * @return {number[]}
 */
 var majorityElement = function(nums) {
    //  for check appear more than n / 3
    let len = ~~(nums.length / 3);
    let map = new Map();
    let res = [];
    
    //  count number appear times
    for(let num of nums)
        map.set(num, (map.get(num)+1) || 1);
    //  find appear more than n / 3
    for(let [num, appear] of map)
        if(appear > len)
            res.push(num);
    
    return res;
};