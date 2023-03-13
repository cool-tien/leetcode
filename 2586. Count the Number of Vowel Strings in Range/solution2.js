/**
    Time Complexity: O(n)
        70 ~ 84 ms      (?% ~ ?%)
    Space Complexity: O(1)
        44.4 ~ 45.2 MB  (?% ~ ?%)

    https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/submissions/914116245/
        Runtime 70 ms, Beats ?%; Memory 45.2 MB, Beats ?%
    https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/submissions/914116346/
        Runtime 84 ms, Beats ?%; Memory 44.4 MB, Beats ?%
    https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/submissions/914116366/
        Runtime 72 ms, Beats ?%; Memory 44.4 MB, Beats ?%

 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
/*
  1. slice the "words", from "left" to "right".
  2. reduce count vowel string.
  3. includes to check is it vowel string.
*/
const vowelStrings = (words, left, right) => words.slice(left, right + 1).reduce((acc, cur) => acc + (['a', 'e', 'i', 'o', 'u'].includes(cur[0]) && ['a', 'e', 'i', 'o', 'u'].includes(cur.at(-1))), 0);