/**
    Time Complexity: O(n)
        98 ~ 115 ms     (43.50% ~ 50.37%)
    Space Complexity: O(n)
        48.0 ~ 48.6 MB  (37.94% ~ 46.30%)

    https://leetcode.com/problems/permutation-in-string/submissions/967037498/
        Runtime 104 ms, Beats 47.51%; Memory 48.5 MB, Beats 37.94%; 
    https://leetcode.com/problems/permutation-in-string/submissions/967038982/
        Runtime 115 ms, Beats 43.50%; Memory 48.0 MB, Beats 46.30%;
    https://leetcode.com/problems/permutation-in-string/submissions/967039434/
        Runtime  98 ms, Beats 50.37%; Memory 48.6 MB, Beats 37.94%;

 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;

    let s1_obj = {};
    let s2_obj = {};
    
    //  build hash map
    for(const c of s1)
        (s1_obj[c])? s1_obj[c]++: s1_obj[c]=1;
    for(const c of s2.substring(0, s1.length))
        (s2_obj[c])? s2_obj[c]++: s2_obj[c]=1;

    let i = s1.length;
    do{
        let is_include = true;

        for(const key in s1_obj)
            if(s1_obj[key] !== s2_obj[key]){
                is_include = false;
                break;
            }
        
        //  exist permutation in str2
        if(is_include)
            return true;

        //  move s2's index to next
        const head_c = s2[i - s1.length];
        const next_c = s2[i];

        (s2_obj[head_c] >= 2)? 
            s2_obj[head_c]--: delete s2_obj[head_c];

        (s2_obj[next_c])? 
            s2_obj[next_c]++: s2_obj[next_c]=1;

        i++;
    }while(i <= s2.length);

    return false;
};