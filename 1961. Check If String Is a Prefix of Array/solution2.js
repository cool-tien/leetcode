/**
    O(n)
    97~114 ms    (21.02%~57.96%)
    43.4~43.9 MB (10.83%~14.65%)
    
    https://leetcode.com/submissions/detail/817551813/
        Runtime: 107 ms, faster than 37.58% of JavaScript online submissions for Check If String Is a Prefix of Array.
        Memory Usage: 43.4 MB, less than 14.65% of JavaScript online submissions for Check If String Is a Prefix of Array.
    https://leetcode.com/submissions/detail/817552905/
        Runtime: 97 ms, faster than 57.96% of JavaScript online submissions for Check If String Is a Prefix of Array.
        Memory Usage: 43.9 MB, less than 10.83% of JavaScript online submissions for Check If String Is a Prefix of Array.
    https://leetcode.com/submissions/detail/817553039/
        Runtime: 114 ms, faster than 21.02% of JavaScript online submissions for Check If String Is a Prefix of Array.
        Memory Usage: 43.5 MB, less than 14.65% of JavaScript online submissions for Check If String Is a Prefix of Array.

 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
 var isPrefixString = function(s, words) {
    let str = "";
    
    for(let word of words){
        str += word;
        
        //  str fully match will s
        if(str === s)
            return true;
        //  str not match will part of s
        else if(str !== s.substr(0, str.length))
            break;
    }
    
    return false;
};