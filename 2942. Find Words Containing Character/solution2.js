/**
    Time Complexity: O(nm)
        66 ~ 67 ms          (?%)
    Space Complexity: O(2n)
        44.26 ~ 44.68 MB    (?%)

    https://leetcode.com/problems/find-words-containing-character/submissions/1107140144/
        Runtime 66ms Beats ?%; Memory 44.53MB Beats ?%; 
    https://leetcode.com/problems/find-words-containing-character/submissions/1107141304/
        Runtime 66ms Beats ?%; Memory 44.26MB Beats ?%; 
    https://leetcode.com/problems/find-words-containing-character/submissions/1107141509/
        Runtime 67ms Beats ?%; Memory 44.68MB Beats ?%; 

 * 
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
const findWordsContaining = (words, x) => 
    words.map((word, i) => (word.includes(x))? i: -1).filter(x => x != -1);