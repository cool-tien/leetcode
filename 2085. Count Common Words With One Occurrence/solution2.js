/**
    O(n)
    76~139 ms    (38.18%~96.28%)
    45.7~45.9 MB (66.55%~71.96%)

    https://leetcode.com/submissions/detail/802076594/
        Runtime: 76 ms, faster than 96.28% of JavaScript online submissions for Count Common Words With One Occurrence.
        Memory Usage: 45.7 MB, less than 71.96% of JavaScript online submissions for Count Common Words With One Occurrence.
    https://leetcode.com/submissions/detail/802114406/
        Runtime: 122 ms, faster than 55.74% of JavaScript online submissions for Count Common Words With One Occurrence.
        Memory Usage: 45.9 MB, less than 66.55% of JavaScript online submissions for Count Common Words With One Occurrence.
    https://leetcode.com/submissions/detail/802114722/
        Runtime: 139 ms, faster than 38.18% of JavaScript online submissions for Count Common Words With One Occurrence.
        Memory Usage: 45.8 MB, less than 66.55% of JavaScript online submissions for Count Common Words With One Occurrence.

 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
 var countWords = function(words1, words2) {
    let map1 = new Map();
    let map2 = new Map();
    let count = 0;
    
    for(let word of words1)
        map1.set(word, (map1.get(word) || 0) + 1);
    for(let word of words2)
        map2.set(word, (map2.get(word) || 0) + 1);
    
    for(let ele of map1)
        if(ele[1]===1 && map2.get(ele[0])===1)
            count++;
    return count;
};