/**
    https://leetcode.com/submissions/detail/699257438/
    Runtime: 71 ms, faster than 82.71% of JavaScript online submissions for Count Prefixes of a Given String.
    Memory Usage: 43.7 MB, less than 31.12% of JavaScript online submissions for Count Prefixes of a Given String.

 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
 const countPrefixes = (words, s) =>
    words.filter(word => word === s.slice(0, word.length)).length;