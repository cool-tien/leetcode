/**
    https://leetcode.com/submissions/detail/694808798/
    Runtime: 75 ms, faster than 66.92% of JavaScript online submissions for Reverse Words in a String.
    Memory Usage: 43.6 MB, less than 94.20% of JavaScript online submissions for Reverse Words in a String.

 * @param {string} s
 * @return {string}
 */
 const reverseWords = (s) => 
 s.split(" ").filter(x=>x!="").reverse().join(" ");