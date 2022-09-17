/**
    O(n)
    98~124 ms    (22.72%~63.02%)
    42.8~43.5 MB (65.34%~97.84%)

    https://leetcode.com/submissions/detail/802008032/
        Runtime: 98 ms, faster than 63.02% of JavaScript online submissions for Majority Element II.
        Memory Usage: 43.5 MB, less than 65.34% of JavaScript online submissions for Majority Element II.
    https://leetcode.com/submissions/detail/802010499/
        Runtime: 124 ms, faster than 22.72% of JavaScript online submissions for Majority Element II.
        Memory Usage: 42.8 MB, less than 97.84% of JavaScript online submissions for Majority Element II.
    https://leetcode.com/submissions/detail/802010749/
        Runtime: 100 ms, faster than 60.86% of JavaScript online submissions for Majority Element II.
        Memory Usage: 43.1 MB, less than 85.24% of JavaScript online submissions for Majority Element II.
    https://leetcode.com/submissions/detail/802010889/
        Runtime: 100 ms, faster than 60.86% of JavaScript online submissions for Majority Element II.
        Memory Usage: 43.3 MB, less than 72.47% of JavaScript online submissions for Majority Element II.

 * @param {number[]} nums
 * @return {number[]}
 */
 var majorityElement = function(nums) {
    //  for check appear more than n / 3
    let len = ~~(nums.length / 3);
    let map = new Map();
    let set = new Set();
    
    for(let i=0; i<nums.length; i++){
        let appear = (map.get(nums[i]) || 0) + 1;
        
        if(appear > len){
            set.add(nums[i]);
            
            //  maximum only exits 2 number will more than n / 3 times
            if(set.size === 2)
                return [...set];
        }
        
        map.set(nums[i], appear);
    }
    
    return [...set];
};