/**
    O(n)
    69~104 ms    (43.31%~91.72%)
    42.8~44.0 MB (10.19%~17.83%)

    https://leetcode.com/submissions/detail/817545273/
        Runtime: 70 ms, faster than 91.08% of JavaScript online submissions for Check If String Is a Prefix of Array.
        Memory Usage: 43.3 MB, less than 16.56% of JavaScript online submissions for Check If String Is a Prefix of Array.
    https://leetcode.com/submissions/detail/817548993/
        Runtime: 69 ms, faster than 91.72% of JavaScript online submissions for Check If String Is a Prefix of Array.
        Memory Usage: 44 MB, less than 10.19% of JavaScript online submissions for Check If String Is a Prefix of Array.
    https://leetcode.com/submissions/detail/817549115/
        Runtime: 104 ms, faster than 43.31% of JavaScript online submissions for Check If String Is a Prefix of Array.
        Memory Usage: 42.8 MB, less than 17.83% of JavaScript online submissions for Check If String Is a Prefix of Array.

 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
 var isPrefixString = function(s, words) {
    let is_prefix = true;
    let str = "";
    
    for(let word of words){
        str += word;
        
        if(!s.includes(str)){
            is_prefix = false;
            break;
        }
        else if(str === s)
            break;
    }
    
    return (str === s);
};