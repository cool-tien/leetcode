/**
    O(2n)
    99 ~ 148 ms     (38.94% ~ 86.93%)
    43.7 ~ 44.2 MB  (53.72% ~ 68.86%)

    https://leetcode.com/submissions/detail/844288042/
        Runtime: 147 ms, faster than 39.74% of JavaScript online submissions for Valid Anagram.
        Memory Usage: 44.2 MB, less than 53.72% of JavaScript online submissions for Valid Anagram.
    https://leetcode.com/submissions/detail/844320647/
        Runtime: 148 ms, faster than 38.94% of JavaScript online submissions for Valid Anagram.
        Memory Usage: 43.9 MB, less than 62.47% of JavaScript online submissions for Valid Anagram.
    https://leetcode.com/submissions/detail/844338576/
        Runtime: 99 ms, faster than 86.93% of JavaScript online submissions for Valid Anagram.
        Memory Usage: 43.7 MB, less than 68.86% of JavaScript online submissions for Valid Anagram.

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let map1 = new Map();
    let map2 = new Map();
    
    for(let c of s)
        map1.set(c, (map1.get(c) || 0) + 1);
    for(let c of t)
        map2.set(c, (map2.get(c) || 0) + 1);
    
    if(map1.size !== map2.size)
        return false;
    
    for(let [c, appear] of [...map1])
        if(!map2.has(c) || appear !== map2.get(c))
            return false;
    return true;
};