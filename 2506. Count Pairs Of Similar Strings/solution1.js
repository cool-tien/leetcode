/**
    O(2n²)
    104 ~ 190 ms    (56.75% ~ 92.79%)
    48.9 ~ 49.2 MB  (51.80% ~ 67.57%)

    https://leetcode.com/problems/count-pairs-of-similar-strings/submissions/863094329/
        Runtime 112 ms, Beats 89.19%; Memory 48.9 MB, Beats 67.57%
    https://leetcode.com/problems/count-pairs-of-similar-strings/submissions/863095778/
        Runtime 104 ms, Beats 92.79%; Memory 49.2 MB, Beats 51.80%
    https://leetcode.com/problems/count-pairs-of-similar-strings/submissions/863096011/
        Runtime 190 ms, Beats 56.75%; Memory 48.9 MB, Beats 67.57%

 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    //  fill into Set, then rebuild to array (reduce size)
    words = words.map(word => [...new Set(word)].sort().join(""));
    let end = words.length - 1;
    let count = 0;
    
    for(let i=0; i<end; i++)
        for(let j=i+1; j<words.length; j++)
            if(words[i] === words[j])
                count++;
    return count;
};