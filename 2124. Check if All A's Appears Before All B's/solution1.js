/**
    https://leetcode.com/submissions/detail/750706414/ 
    Runtime: 63 ms, faster than 91.67% of JavaScript online submissions for Check if All A's Appears Before All B's.
    Memory Usage: 41.5 MB, less than 98.15% of JavaScript online submissions for Check if All A's Appears Before All B's.

 * @param {string} s
 * @return {boolean}
 */
 var checkString = function(s) {
    let a_idx = -1;
    let b_idx = Infinity;
    
    for(let i=0; i<s.length; i++){
        if(s[i] == 'a'){
            if(i > a_idx)
                a_idx = i;
        }
        else{
            if(i < b_idx)
                b_idx = i;
        }
    }
    
    return a_idx < b_idx;
};