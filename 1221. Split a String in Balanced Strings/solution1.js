/**
    O(n)
    74~113 ms    (13.06%~81.34%)
    41.5~42.4 MB (43.70%~97.67%)

    https://leetcode.com/submissions/detail/803663705/#/
        Runtime: 74 ms, faster than 81.34% of JavaScript online submissions for Split a String in Balanced Strings.
        Memory Usage: 42.2 MB, less than 62.36% of JavaScript online submissions for Split a String in Balanced Strings.
    https://leetcode.com/submissions/detail/803680977/#/
        Runtime: 113 ms, faster than 13.06% of JavaScript online submissions for Split a String in Balanced Strings.
        Memory Usage: 41.5 MB, less than 97.67% of JavaScript online submissions for Split a String in Balanced Strings.
    https://leetcode.com/submissions/detail/803681121/#/
        Runtime: 107 ms, faster than 21.77% of JavaScript online submissions for Split a String in Balanced Strings.
        Memory Usage: 42.4 MB, less than 43.70% of JavaScript online submissions for Split a String in Balanced Strings.

 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let r = 0;
    let l = 0;
    let count = 0;
    s = s.split("");
    
    while(s.length){
        let c= s.shift();
        
        if(c === 'R')
            r++;
        else if(c === 'L')
            l++;
        
        if(r === l){
            r = l = 0;
            count++;
        }
    }
    
    return count;
};