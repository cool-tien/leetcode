/**
    O(n log(n))
    62 ~ 72 ms      (83.21% ~ 95.20%)
    41.7 ~ 42.0 MB  (56.42% ~ 88.13%)

    https://leetcode.com/problems/is-subsequence/submissions/859976984/
        Runtime 72 ms, Beats 83.21%; Memory 42.0 MB, Beats 56.42%
    https://leetcode.com/problems/is-subsequence/submissions/859977020/
        Runtime 62 ms, Beats 95.20%; Memory 41.7 MB, Beats 81.94%
    https://leetcode.com/problems/is-subsequence/submissions/859977272/
        Runtime 65 ms, Beats 92.24%; Memory 41.7 MB, Beats 88.13%

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let start_idx = 0;

    for(let c of s){
        let idx = t.indexOf(c, start_idx);

        //  not found
        if(idx === -1)
            return false;

        start_idx = idx + 1;
    }

    return true;
};