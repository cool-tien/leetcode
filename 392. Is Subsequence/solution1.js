/**
	https://leetcode.com/submissions/detail/651662238/
	Runtime: 68 ms, faster than 86.34% of JavaScript online submissions for Is Subsequence.
	Memory Usage: 43.8 MB, less than 5.05% of JavaScript online submissions for Is Subsequence.
	
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(new Set(t).size!=new Set(s+t).size)
        return false;
    
    //  count matched subsequence
    let count = 0;
    let idx = 0;
    for(let i=0; i<s.length; i++){
        let found = false;
        
        for(let j=idx; j<t.length; j++)
            if(t[j]==s[i]){
                found = true;
                count += 1;
                idx = j+1;
                
                break;
            }
        
        if(!found)
            return false;
    }
    
    return count==s.length;
};