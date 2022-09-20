/**
    O(1)
    92~112 ms    (13.18%~57.73%)
    41.7~42.3 MB (23.18%~94.09%)

    https://leetcode.com/submissions/detail/804140803/#/
        Runtime: 112 ms, faster than 13.18% of JavaScript online submissions for Smallest Even Multiple.
        Memory Usage: 41.7 MB, less than 94.09% of JavaScript online submissions for Smallest Even Multiple.
    https://leetcode.com/submissions/detail/804141958/#/
        Runtime: 111 ms, faster than 16.36% of JavaScript online submissions for Smallest Even Multiple.
        Memory Usage: 42.3 MB, less than 23.18% of JavaScript online submissions for Smallest Even Multiple.
    https://leetcode.com/submissions/detail/804142076/#/
        Runtime: 92 ms, faster than 57.73% of JavaScript online submissions for Smallest Even Multiple.
        Memory Usage: 41.8 MB, less than 76.82% of JavaScript online submissions for Smallest Even Multiple.

 * @param {number} n
 * @return {number}
 */
 const smallestEvenMultiple = n => (n%2 === 0)? n: n+n;