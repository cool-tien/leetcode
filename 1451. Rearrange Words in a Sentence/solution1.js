/**
    O(n)
    78~141 ms    (31.15%~100.00%)
    46.2~46.6 MB (40.98%~62.30%)

    https://leetcode.com/submissions/detail/805771919/#/
        Runtime: 141 ms, faster than 31.15% of JavaScript online submissions for Rearrange Words in a Sentence.
        Memory Usage: 46.6 MB, less than 40.98% of JavaScript online submissions for Rearrange Words in a Sentence.
    https://leetcode.com/submissions/detail/805773391/#/
        Runtime: 139 ms, faster than 32.79% of JavaScript online submissions for Rearrange Words in a Sentence.
        Memory Usage: 46.2 MB, less than 62.30% of JavaScript online submissions for Rearrange Words in a Sentence.
    https://leetcode.com/submissions/detail/805774055/#/
        Runtime: 78 ms, faster than 100.00% of JavaScript online submissions for Rearrange Words in a Sentence.
        Memory Usage: 46.3 MB, less than 54.10% of JavaScript online submissions for Rearrange Words in a Sentence.

 * @param {string} text
 * @return {string}
 */
 var arrangeWords = function(text) {
    let str = text.split(" ").sort((a, b) => {
        let diff = a.length - b.length;
        
        return (diff === 0)? 0: diff;
    }).join(" ");
    
    return str[0].toUpperCase() + str.toLowerCase().substr(1);
};