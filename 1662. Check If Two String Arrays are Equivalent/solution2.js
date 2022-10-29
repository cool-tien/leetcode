/**
    O(n)
    62~100 ms    (38.35%~95.42%)
    42.1~42.9 MB ( 5.37%~52.36%)
    
    https://leetcode.com/submissions/detail/829604813/
        Runtime: 86 ms, faster than 69.50% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
        Memory Usage: 42.1 MB, less than 52.36% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
    https://leetcode.com/submissions/detail/829605251/
        Runtime: 100 ms, faster than 38.35% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
        Memory Usage: 42.9 MB, less than 5.37% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
    https://leetcode.com/submissions/detail/829605327/
        Runtime: 62 ms, faster than 95.42% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
        Memory Usage: 42.3 MB, less than 40.18% of JavaScript online submissions for Check If Two String Arrays are Equivalent.

 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    let s1 = word1.join("");
    let s2 = word2.join("");
    
    //  length not match
    if(s1.length !== s2.length)
        return false;
    
    for(let i=0; i<s1.length; i++)
        if(s1[i] !== s2[i])
            return false;
    return true;
};