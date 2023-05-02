/**
    Time Complexity: O(nm)
        52 ~ 59 ms      (74.80% ~ 94.29%)
    Space Complexity: O(m)
        42.1 ~ 42.6 MB  (43.52% ~ 81.34%)
    
    https://leetcode.com/problems/longest-common-prefix/submissions/943060501/
        Runtime 59 ms, Beats 74.80%; Memory 42.1 MB, Beats 81.34%; 
    https://leetcode.com/problems/longest-common-prefix/submissions/943061304/
        Runtime 52 ms, Beats 94.29%; Memory 42.3 MB, Beats 61.43%;
    https://leetcode.com/problems/longest-common-prefix/submissions/943061378/
        Runtime 59 ms, Beats 74.80%; Memory 42.6 MB, Beats 43.52%;

 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let min_len = Math.min(...strs.map(s => s.length));

    while(min_len){
        const common_prefix = strs[0].substring(0, min_len);
        let is_common = true;
        
        for(let i=1; i<strs.length; i++)
            if(strs[i].substring(0, min_len) !== common_prefix){
                is_common = false;
                break;
            }
        
        if(is_common)
            return common_prefix;
        min_len--;
    }

    return "";
};