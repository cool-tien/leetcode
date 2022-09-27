/**
    O(n)
    92~134 ms    (5.69%~45.53%)
    41.7~42.3 MB (44.72%~89.80%)

    https://leetcode.com/submissions/detail/809483097/
        Runtime: 134 ms, faster than 5.69% of JavaScript online submissions for Thousand Separator.
        Memory Usage: 42.3 MB, less than 44.72% of JavaScript online submissions for Thousand Separator.
    https://leetcode.com/submissions/detail/809505565/
        Runtime: 98 ms, faster than 34.96% of JavaScript online submissions for Thousand Separator.
        Memory Usage: 41.7 MB, less than 87.80% of JavaScript online submissions for Thousand Separator.
    https://leetcode.com/submissions/detail/809505676/
        Runtime: 92 ms, faster than 45.53% of JavaScript online submissions for Thousand Separator.
        Memory Usage: 42.1 MB, less than 64.23% of JavaScript online submissions for Thousand Separator.

 * @param {number} n
 * @return {string}
 */
 var thousandSeparator = function(n) {
    let s = String(n);
    let res = "";
    let digits = 0;
    
    for(let i=s.length-1; i>=0; i--){
        res = s[i] + res;
        
        digits++;
        if( (i !== 0) && (res !== "") )
            res = (digits%3 === 0? '.': '') + res;
    }
    
    return res;
};