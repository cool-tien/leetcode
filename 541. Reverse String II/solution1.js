/**
    https://leetcode.com/submissions/detail/683232121/
    Runtime: 68 ms, faster than 85.43% of JavaScript online submissions for Reverse String II.
    Memory Usage: 44.1 MB, less than 92.46% of JavaScript online submissions for Reverse String II.

 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 const reverseStr = (s, k) => 
    [...Array((s.length/k)<1? 1: ~~(s.length/k))]
        .map((c,i) => 
            s.substr(i * 2 * k, k).split("").reverse().join("") + s.substr(i * 2 * k + k, k)
        ).join("");