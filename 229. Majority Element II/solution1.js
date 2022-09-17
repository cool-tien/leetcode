/**
    O(n)
    73~120 ms    (28.69%~92.21%)
    43.0~43.3 MB (72.47%~92.21%)

    https://leetcode.com/submissions/detail/801990966/
        Runtime: 103 ms, faster than 56.88% of JavaScript online submissions for Majority Element II.
        Memory Usage: 43 MB, less than 92.21% of JavaScript online submissions for Majority Element II.
    https://leetcode.com/submissions/detail/801993423/
        Runtime: 120 ms, faster than 28.69% of JavaScript online submissions for Majority Element II.
        Memory Usage: 43.2 MB, less than 77.78% of JavaScript online submissions for Majority Element II.
    https://leetcode.com/submissions/detail/801993803/
        Runtime: 81 ms, faster than 82.92% of JavaScript online submissions for Majority Element II.
        Memory Usage: 43.3 MB, less than 72.47% of JavaScript online submissions for Majority Element II.
    https://leetcode.com/submissions/detail/802002561/
        Runtime: 73 ms, faster than 92.21% of JavaScript online submissions for Majority Element II.
        Memory Usage: 43.2 MB, less than 85.24% of JavaScript online submissions for Majority Element II.

 * @param {number[]} nums
 * @return {number[]}
 */
 var majorityElement = function(nums) {
    //  for check appear more than n / 3
    let flag_len = ~~(nums.length / 3) + 1;
    let map = new Map();
    let res = [];
    
    for(let i=0; i<nums.length; i++){
        if(res.includes(nums[i])) continue;
        
        let appear = (map.get(nums[i]) + 1) || 1;
        
        if(appear === flag_len){
            res.push(nums[i]);
            
            //  maximum only exits 2 number will more than n / 3 times
            if(res.length === 2)
                return res;
        }
        
        map.set(nums[i], appear);
    }
    
    return res;
};