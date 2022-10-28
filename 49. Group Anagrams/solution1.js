/**
    O((n log n)²)
    760~1905 ms  (5.01%)
    52.1~61.1 MB (5.07%~92.60%)

    https://leetcode.com/submissions/detail/831768912/
        Runtime: 760 ms, faster than 5.01% of JavaScript online submissions for Group Anagrams.
        Memory Usage: 52.1 MB, less than 92.60% of JavaScript online submissions for Group Anagrams.
    https://leetcode.com/submissions/detail/831770297/
        Runtime: 1905 ms, faster than 5.01% of JavaScript online submissions for Group Anagrams.
        Memory Usage: 61.1 MB, less than 5.07% of JavaScript online submissions for Group Anagrams.
    https://leetcode.com/submissions/detail/831770665/
        Runtime: 766 ms, faster than 5.01% of JavaScript online submissions for Group Anagrams.
        Memory Usage: 52.2 MB, less than 92.60% of JavaScript online submissions for Group Anagrams.

 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let sorted = [...strs].map(s => s.split("").sort().join(""));
    let res = [];
    
    for(let i=0; i<strs.length; i++){
        //  is it exist group
        let is_exist = false;
        
        for(let j=0; j<i; j++){
            if(sorted[i] === sorted[j]){
                is_exist = true;
                break;
            }
        }
        
        if(is_exist){
            for(let j=0; j<res.length; j++){
                let s2 = res[j][0].split("").sort().join("");
                
                if(s2 === sorted[i]){
                    res[j].push(strs[i]);
                    break;
                }
            }
        }
        else
            res.push([strs[i]]);
    }
    
    return res;
};