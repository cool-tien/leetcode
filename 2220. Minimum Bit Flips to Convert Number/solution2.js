/**
    O(2n)
    63~105 ms    (29.63%~94.44%)
    41.8~42.4 MB (15.74%~77.78%)

    https://leetcode.com/submissions/detail/820546611/
        Runtime: 105 ms, faster than 29.63% of JavaScript online submissions for Minimum Bit Flips to Convert Number.
        Memory Usage: 42.4 MB, less than 15.74% of JavaScript online submissions for Minimum Bit Flips to Convert Number.
    https://leetcode.com/submissions/detail/820547587/
        Runtime: 63 ms, faster than 94.44% of JavaScript online submissions for Minimum Bit Flips to Convert Number.
        Memory Usage: 41.8 MB, less than 77.78% of JavaScript online submissions for Minimum Bit Flips to Convert Number.
    https://leetcode.com/submissions/detail/820548491/
        Runtime: 102 ms, faster than 34.26% of JavaScript online submissions for Minimum Bit Flips to Convert Number.
        Memory Usage: 42 MB, less than 56.48% of JavaScript online submissions for Minimum Bit Flips to Convert Number.

 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
 const minBitFlips = (start, goal) => (start ^ goal).toString(2).split("").map(c => ~~c).reduce((acc, num) => acc + num, 0);