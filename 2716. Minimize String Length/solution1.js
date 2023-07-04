/**
    Time Complexity: O(n)
        127 ~ 137 ms    (75.78% ~ 93.20%)
    Space Complexity: O(n)
        49.8 ~ 50.6 MB  (62.79% ~ 84.88%)
    
    https://leetcode.com/problems/minimize-string-length/submissions/986396129/
        Runtime 134 ms, Beats 81.59%; Memory 49.8 MB, Beats 84.88%; 
    https://leetcode.com/problems/minimize-string-length/submissions/986396542/
        Runtime 127 ms, Beats 93.20%; Memory 50.0 MB, Beats 81.59%; 
    https://leetcode.com/problems/minimize-string-length/submissions/986425350/
        Runtime 137 ms, Beats 75.78%; Memory 50.6 MB, Beats 62.79%; 

 * @param {string} s
 * @return {number}
 */
const minimizedStringLength = s => new Set(s).size;