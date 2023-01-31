/**
    Time Complexity: O(n)
        67 ~ 76 ms      (24.48% ~ 70.57%)
    Space Complexity: O(1)
        44.2 ~ 44.5 MB  (23.44% ~ 54.25%)
    
    https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/submissions/888447025/
        Runtime 67 ms, Beats 70.57%; Memory 44.3 MB, Beats 43.75%
    https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/submissions/888447776/
        Runtime 67 ms, Beats 70.57%; Memory 44.2 MB, Beats 54.25%
    https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/submissions/888448059/
        Runtime 76 ms, Beats 24.48%; Memory 44.5 MB, Beats 23.44%

 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let positive = 0;
    let negative = 0;
    
    for(let num of nums)
        if(num === 0)
            continue;
        else if(num >= 1)
            positive++;
        else
            negative++;
    return Math.max(positive, negative);
};