/**
    https://leetcode.com/submissions/detail/683207504/
    Runtime: 81 ms, faster than 76.90% of JavaScript online submissions for Reverse Words in a String III.
    Memory Usage: 48.3 MB, less than 72.25% of JavaScript online submissions for Reverse Words in a String III.

 * @param {string} s
 * @return {string}
 */
 const reverseWords = (s) => 
 s.split(" ")
     .map(x=>x.split("").reverse().join(""))
     .join(" ");