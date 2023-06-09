/**
    Time Complexity: O(nm)
        6101 ~ 6213 ms  (8.82%)
    Space Complexity: O(2n)
        109.9 ~ 112.4 MB(5.70%)

    https://leetcode.com/problems/permutation-in-string/submissions/967025021/
        Runtime 6101 ms, Beats 8.82%; Memory 109.9 MB, Beats 5.7%; 
    https://leetcode.com/problems/permutation-in-string/submissions/967025887/
        Runtime 6162 ms, Beats 8.82%; Memory 112.4 MB, Beats 5.7%;
    https://leetcode.com/problems/permutation-in-string/submissions/967027829/
        Runtime 6213 ms, Beats 8.82%; Memory 110.0 MB, Beats 5.7%;

 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let s1_obj = {};
    
    for(const c of s1)
        (s1_obj[c])? s1_obj[c]++: s1_obj[c]=1;
    const s1_keys = Object.keys(s1_obj).sort().join("");
    
    for(let i=0; i<s2.length; i++){
        let str = s2.substring(i, i + s1.length);
        //  substring of s2, appear time
        let str_obj = {};
        
        for(const c of str)
            (str_obj[c])? str_obj[c]++: str_obj[c]=1;
        const str_keys = Object.keys(str_obj).sort().join("");
        
        //  key (character) not same
        if(s1_keys !== str_keys)
            continue;

        let is_include = true;

        for(const key in s1_obj)
            if(s1_obj[key] !== str_obj[key]){
                is_include = false;
                break;
            }
        
        //  exist permutation in str2
        if(is_include)
            return true;
    }

    return false;
};