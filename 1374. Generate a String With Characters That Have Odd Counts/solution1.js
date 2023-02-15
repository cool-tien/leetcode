/**
    Time Complexity: O(1)
        51 ~ 62 ms      (76.60% ~ 98.58%)
    Space Complexity: O(1)
        41.9 ~ 42.2 MB  (54.61% ~ 74.47%)
    
    https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/submissions/898169618/
        Runtime 62 ms, Beats 76.60%; Memory 42.2 MB, Beats 54.61%
    https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/submissions/898171006/
        Runtime 51 ms, Beats 98.58%; Memory 41.9 MB, Beats 74.47%
    https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/submissions/898171323/
        Runtime 59 ms, Beats 87.94%; Memory 42.1 MB, Beats 61.70%

 * @param {number} n
 * @return {string}
 */
const generateTheString = n => (n % 2)? "a".repeat(n): "a".repeat(n - 1) + "b";