/**
    O(n)
    92~105 ms    (25.65%~57.59%)
    41.7~42.4 MB (29.19%~92.93%)

    https://leetcode.com/submissions/detail/829601990/
        Runtime: 105 ms, faster than 25.65% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
        Memory Usage: 42.4 MB, less than 29.19% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
    https://leetcode.com/submissions/detail/829603410/
        Runtime: 92 ms, faster than 57.59% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
        Memory Usage: 41.7 MB, less than 92.93% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
    https://leetcode.com/submissions/detail/829603492/
        Runtime: 93 ms, faster than 55.24% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
        Memory Usage: 42.2 MB, less than 52.36% of JavaScript online submissions for Check If Two String Arrays are Equivalent.

 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 const arrayStringsAreEqual (word1, word2) => (word1.join("") === word2.join(""));