/**
    O(n)
    84 ~ 134 ms     (14.22% ~ 84.42%)
    44.8 ~ 46.4 MB  (10.55% ~ 37.71%)
    
    https://leetcode.com/submissions/detail/846781878/
        Runtime: 120 ms, faster than 37.96% of JavaScript online submissions for Max Consecutive Ones.
        Memory Usage: 45.8 MB, less than 14.17% of JavaScript online submissions for Max Consecutive Ones.
    https://leetcode.com/submissions/detail/846782669/
        Runtime: 84 ms, faster than 84.42% of JavaScript online submissions for Max Consecutive Ones.
        Memory Usage: 44.8 MB, less than 37.71% of JavaScript online submissions for Max Consecutive Ones.
    https://leetcode.com/submissions/detail/846782786/
        Runtime: 134 ms, faster than 14.22% of JavaScript online submissions for Max Consecutive Ones.
        Memory Usage: 46.4 MB, less than 10.55% of JavaScript online submissions for Max Consecutive Ones.

 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let cur = 0;
    
    for(let num of nums)
        if(num)
            cur++;
        else{
            max = Math.max(cur, max);
            cur = 0;
        }
    
    return Math.max(cur, max);
};