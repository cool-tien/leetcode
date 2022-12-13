/**
    O(n)
    90 ~ 100 ms     (25.71% ~ 54.64%)
    41.9 ~ 42.5 MB  (6.50% ~ 54.84%)
    
    https://leetcode.com/problems/n-th-tribonacci-number/submissions/858904565/
        Runtime 90 ms, Beats 54.64%; Memory 42.5 MB, Beats 6.50%
    https://leetcode.com/problems/n-th-tribonacci-number/submissions/858905654/
        Runtime 100 ms, Beats 25.71%; Memory 41.9 MB, Beats 54.84%
    https://leetcode.com/problems/n-th-tribonacci-number/submissions/858905874/
        Runtime 92 ms, Beats 48.89%; Memory 42.4 MB, Beats 6.50%

 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let tri = [0, 1, 1];

    //  when n <= 2 (T0 | T1 | T2)
    if(n <= 2) return tri[n];

    for(let i=3; i<=n ; i++){
        let i_tri = tri[0] + tri[1] + tri[2];
        [tri[0], tri[1], tri[2]] = [tri[1], tri[2], i_tri];
    }
    
    return tri[2];
};