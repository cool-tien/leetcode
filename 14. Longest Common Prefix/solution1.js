/**
    Time Complexity: O(n log(n))
        76 ~ 88 ms      ( 5.36% ~ 10.51%)
    Space Complexity: O(m)
        42.3 ~ 42.6 MB  (43.52% ~ 68.12%)
    
    https://leetcode.com/problems/longest-common-prefix/submissions/691378957/
        Runtime 88 ms, Beats  5.36%; Memory 42.6 MB, Beats 43.52%; 
    https://leetcode.com/problems/longest-common-prefix/submissions/691379152/
        Runtime 76 ms, Beats 10.51%; Memory 42.4 MB, Beats 61.43%; 
    https://leetcode.com/problems/longest-common-prefix/submissions/691379248/
        Runtime 86 ms, Beats  5.36%; Memory 42.3 MB, Beats 68.12%; 

 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let output = "";
    
    strs.sort((a, b) => b.length-a.length);
    for(let i=0; i<strs[0].length; i++){
        let flag = true;
        let ch = strs[0][i];
        
        for(let j=0; j<strs.length; j++)
            if(strs[j][i]!=ch){
                flag = false;
                break;
            }
        
        if(flag)
            output += ch;
        else
            break;
    }
    
    return output;
};