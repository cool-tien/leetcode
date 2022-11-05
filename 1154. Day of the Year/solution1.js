/**
    O(1)
    186~317 ms   (66.67%~92.52%)
    50.0~51.8 MB (30.61%~98.64%)
    
    https://leetcode.com/submissions/detail/835737103/
        Runtime: 186 ms, faster than 92.52% of JavaScript online submissions for Day of the Year.
        Memory Usage: 50 MB, less than 98.64% of JavaScript online submissions for Day of the Year.
    https://leetcode.com/submissions/detail/835759047/
        Runtime: 311 ms, faster than 68.71% of JavaScript online submissions for Day of the Year.
        Memory Usage: 51.8 MB, less than 30.61% of JavaScript online submissions for Day of the Year.
    https://leetcode.com/submissions/detail/835759167/
        Runtime: 317 ms, faster than 66.67% of JavaScript online submissions for Day of the Year.
        Memory Usage: 51.1 MB, less than 74.15% of JavaScript online submissions for Day of the Year.

 * @param {string} date
 * @return {number}
 */
 var dayOfYear = function(date) {
    let start_time = new Date(`${date.substring(0, 4)}-01-01`).getTime();
    let end_time = new Date(date).getTime();
    let diff_ms = end_time - start_time;
    
    return diff_ms / (24 * 60 * 60 * 1000) + 1;
};