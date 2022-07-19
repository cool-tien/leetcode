/**
    https://leetcode.com/submissions/detail/750713902/
    Runtime: 74 ms, faster than 75.62% of JavaScript online submissions for Check if All A's Appears Before All B's.
    Memory Usage: 41.9 MB, less than 77.16% of JavaScript online submissions for Check if All A's Appears Before All B's.

 * @param {string} s
 * @return {boolean}
 */
 const checkString = s => s.includes('b')? s.indexOf('b') > s.lastIndexOf('a'): true;