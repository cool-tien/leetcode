/**
    O(n)
    118~122 ms 
    45.0~45.6 MB

    2022-10-17 09:35 (UTC+8)
    *** Sorry. We do not have enough accepted submissions to show distribution chart. ***

    https://leetcode.com/submissions/detail/824091308/
        Runtime: 119 ms, faster than 100.00% of JavaScript online submissions for Largest Positive Integer That Exists With Its Negative.
        Memory Usage: 45.6 MB, less than 100.00% of JavaScript online submissions for Largest Positive Integer That Exists With Its Negative.
    https://leetcode.com/submissions/detail/824092322/
        Runtime: 118 ms, faster than 100.00% of JavaScript online submissions for Largest Positive Integer That Exists With Its Negative.
        Memory Usage: 45 MB, less than 100.00% of JavaScript online submissions for Largest Positive Integer That Exists With Its Negative.
    https://leetcode.com/submissions/detail/824092463/
        Runtime: 122 ms, faster than 100.00% of JavaScript online submissions for Largest Positive Integer That Exists With Its Negative.
        Memory Usage: 45.3 MB, less than 100.00% of JavaScript online submissions for Largest Positive Integer That Exists With Its Negative.

 * @param {number[]} nums
 * @return {number}
 */
 var findMaxK = function(nums) {
    let set = new Set();
    let max = -1;
    
    for(let num of nums){
        set.add(num);
        
        if(set.has(num) && set.has(-num)){
            let abs = Math.abs(num);
            
            if(abs > max)
                max = abs;
        }
    }
    
    return max;
};