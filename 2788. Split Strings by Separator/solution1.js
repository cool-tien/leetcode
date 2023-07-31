/**
    Time Complexity: O(n)
        77 ~ 83 ms      (97.40% ~ 99.70%)
    Space Complexity: O(n)
        48.8 ~ 49.1 MB  (33.20% ~ 54.17%)
    
    https://leetcode.com/problems/split-strings-by-separator/submissions/1008129398/
        Runtime 79 ms, Beats 99.70%; Memory 48.8 MB, Beats 54.17%; 
    https://leetcode.com/problems/split-strings-by-separator/submissions/1008130727/
        Runtime 77 ms, Beats 99.63%; Memory 49.1 MB, Beats 33.20%; 
    https://leetcode.com/problems/split-strings-by-separator/submissions/1008131117/
        Runtime 83 ms, Beats 97.40%; Memory 48.9 MB, Beats 44.34%; 

 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let res = [];

    for(const word of words)
        res.push(...word.split(separator));
    
    return res.filter(x => x !== "");
};