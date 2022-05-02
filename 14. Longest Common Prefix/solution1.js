/**
    https://leetcode.com/submissions/detail/691379152/
    

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