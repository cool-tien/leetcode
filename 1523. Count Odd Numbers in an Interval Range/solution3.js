/**
    O(1)
    64~90 ms     (82.51%~96.13%)
    41.8~42.0 MB (50.28%~75.06%)

    https://leetcode.com/submissions/detail/837698702/
        Runtime: 64 ms, faster than 96.13% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
        Memory Usage: 42 MB, less than 50.28% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
    https://leetcode.com/submissions/detail/837706892/
        Runtime: 82 ms, faster than 88.40% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
        Memory Usage: 41.8 MB, less than 63.00% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
    https://leetcode.com/submissions/detail/837707006/
        Runtime: 90 ms, faster than 82.51% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
        Memory Usage: 41.8 MB, less than 75.06% of JavaScript online submissions for Count Odd Numbers in an Interval Range.

 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    let is_low_odd = (low % 2);
    let is_high_odd = (high % 2);
    
    if(!is_low_odd && !is_high_odd)
        return (high - low) / 2;
    else
        return ~~((high - low) / 2) + 1;
};