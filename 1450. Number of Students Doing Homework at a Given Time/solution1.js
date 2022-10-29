/**
    O(n)
    84~98 ms     (45.63%~72.17%)
    41.8~42.4 MB (19.09%~78.96%)

    https://leetcode.com/submissions/detail/832411112/
        Runtime: 93 ms, faster than 58.25% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
        Memory Usage: 42.4 MB, less than 19.09% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
    https://leetcode.com/submissions/detail/832424141/
        Runtime: 84 ms, faster than 72.17% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
        Memory Usage: 41.8 MB, less than 78.96% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
    https://leetcode.com/submissions/detail/832424239/
        Runtime: 98 ms, faster than 45.63% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
        Memory Usage: 42.4 MB, less than 19.09% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.

 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
 var busyStudent = function(startTime, endTime, queryTime) {
    let busy = 0;
    
    for(let i in startTime)
        if(queryTime >= startTime[i] && queryTime <= endTime[i])
            busy++;
    return busy;
};