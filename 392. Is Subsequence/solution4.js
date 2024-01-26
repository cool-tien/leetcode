/**
    Time Complexity: O(n)
        52 ~ 55 ms          (49.44% ~ 67.58%)
    Space Complexity: O(1)
        48.38 ~ 48.93 MB    ( 9.52% ~ 10.76%)

    https://leetcode.com/problems/is-subsequence/submissions/1157000609/
        Runtime 55 ms Beats 49.44%; Memory 48.71 MB Beats  9.52%; 
    https://leetcode.com/problems/is-subsequence/submissions/1157002639/
        Runtime 53 ms Beats 61.55%; Memory 48.38 MB Beats 10.76%; 
    https://leetcode.com/problems/is-subsequence/submissions/1157002952/
        Runtime 52 ms Beats 67.58%; Memory 48.93 MB Beats 8.35%; 

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length) return false;

    let i = 0;
    let idx = 0;
    
    while(i < s.length){
        if(s[i] === t[idx])
            i++;
        
        idx++;
        if(idx === t.length)
            break;
    }
    
    return (i === s.length);
};