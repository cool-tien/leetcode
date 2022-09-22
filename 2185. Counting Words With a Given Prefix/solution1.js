/**
    O(n)
    93~105 ms    (29.10%~52.84%)
    42.9~43.0 MB (38.29%~43.48%)

    https://leetcode.com/submissions/detail/805810103/#/
        Runtime: 93 ms, faster than 52.84% of JavaScript online submissions for Counting Words With a Given Prefix.
        Memory Usage: 43 MB, less than 38.29% of JavaScript online submissions for Counting Words With a Given Prefix.
    https://leetcode.com/submissions/detail/805811856/#/
        Runtime: 105 ms, faster than 29.10% of JavaScript online submissions for Counting Words With a Given Prefix.
        Memory Usage: 42.9 MB, less than 43.48% of JavaScript online submissions for Counting Words With a Given Prefix.
    https://leetcode.com/submissions/detail/805812107/#/
        Runtime: 98 ms, faster than 43.14% of JavaScript online submissions for Counting Words With a Given Prefix.
        Memory Usage: 43 MB, less than 43.48% of JavaScript online submissions for Counting Words With a Given Prefix.

 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
 const prefixCount = (words, pref) => words.filter(word => word.startsWith(pref)).length;