/**
    O(n)
    69~97 ms     (46.05%~92.11%)
    42.0~42.5 MB ( 5.26%~50.00%)
    
    https://leetcode.com/submissions/detail/815753027/
        Runtime: 97 ms, faster than 46.05% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
        Memory Usage: 42.5 MB, less than 5.26% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
    https://leetcode.com/submissions/detail/815754840/
        Runtime: 93 ms, faster than 59.21% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
        Memory Usage: 42 MB, less than 50.00% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
    https://leetcode.com/submissions/detail/815754981/
        Runtime: 69 ms, faster than 92.11% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
        Memory Usage: 42.1 MB, less than 50.00% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.

 * @param {string} s
 * @return {boolean}
 */
 const checkOnesSegment = s => !s.includes("01");