/**
    O(n)
    94~127 ms    ( 5.26%~55.26%)
    42.1~42.3 MB (21.05%~32.89%)
    
    https://leetcode.com/submissions/detail/815742714/
        Runtime: 94 ms, faster than 55.26% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
        Memory Usage: 42.1 MB, less than 32.89% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
    https://leetcode.com/submissions/detail/815747776/
        Runtime: 127 ms, faster than 5.26% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
        Memory Usage: 42.3 MB, less than 21.05% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
    https://leetcode.com/submissions/detail/815748942/
        Runtime: 100 ms, faster than 38.16% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
        Memory Usage: 42.1 MB, less than 32.89% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.

 * @param {string} s
 * @return {boolean}
 */
 var checkOnesSegment = function(s) {
    let idx_zero = s.indexOf('0');
    
    if(idx_zero !== -1)
        while(idx_zero < s.length){
            if(s[idx_zero] === '1')
                return false;
            idx_zero++;
        }
    
    return true;
};