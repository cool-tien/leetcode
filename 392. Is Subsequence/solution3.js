/**
    Time Complexity: O(n)
        54 ~ 63 ms      (10.80% ~ 51.51%)
    Space Complexity: O(1)
        41.6 ~ 42.4 MB  (24.60% ~ 86.58%)

    https://leetcode.com/problems/is-subsequence/submissions/1056136156/
        Runtime 63 ms, Beats 10.80%; Memory 42.4 MB, Beats 24.60%; 
    https://leetcode.com/problems/is-subsequence/submissions/1056160746/
        Runtime 55 ms, Beats 45.52%; Memory 41.8 MB, Beats 64.22%; 
    https://leetcode.com/problems/is-subsequence/submissions/1056160845/
        Runtime 54 ms, Beats 51.51%; Memory 41.6 MB, Beats 86.58%; 

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s === t) return true;
    if(t.length === 0) return false;
    
    let idx = 0;
    for(const c of s){
        //  looping until found target or return false (when not exist)
        while(true){
            if(c === t[idx]){
                idx++;
                break;
            }
            
            idx++;
            if(idx >= t.length)
                return false;
        }
    }
    
    return true;
};