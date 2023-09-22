/**
    Time Complexity: O(n)
        49 ~ 59 ms      (32.74% ~ 84.96%)
    Space Complexity: O(1)
        41.4 ~ 42.5 MB  (44.25% ~ 97.35%)
    
    https://leetcode.com/problems/number-of-lines-to-write-string/submissions/1056154629/
        Runtime 59 ms, Beats 32.74%; Memory 42.1 MB, Beats 69.30%; 
    https://leetcode.com/problems/number-of-lines-to-write-string/submissions/1056158195/
        Runtime 51 ms, Beats 75.22%; Memory 41.4 MB, Beats 97.35%; 
    https://leetcode.com/problems/number-of-lines-to-write-string/submissions/1056158846/
        Runtime 49 ms, Beats 84.96%; Memory 42.5 MB, Beats 44.25%; 

 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let lines = 1;
    let width = 0;

    for(const c of s){
        const idx = c.charCodeAt() - 97;
        
        if((width + widths[idx]) > 100){
            lines++;
            width = 0;
        }
        
        width += widths[idx];
    }
    
    return [lines, width];
};