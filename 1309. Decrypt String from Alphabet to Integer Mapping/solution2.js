/**
    O(n)
    94~99 ms     (44.09%~56.87%)
    41.6~42.5 MB (30.03%~96.17%)

    https://leetcode.com/submissions/detail/842978857/
        Runtime: 96 ms, faster than 51.76% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
        Memory Usage: 42.5 MB, less than 30.03% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
    https://leetcode.com/submissions/detail/842979278/
        Runtime: 94 ms, faster than 56.87% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
        Memory Usage: 41.9 MB, less than 87.54% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
    https://leetcode.com/submissions/detail/842979358/
        Runtime: 99 ms, faster than 44.09% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
        Memory Usage: 41.6 MB, less than 96.17% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.

 * @param {string} s
 * @return {string}
 */
 const freqAlphabets = s => String.fromCharCode(...s.match(/([0-9][0-9]#|[0-9])/g).map(x => parseInt(x) + 96));