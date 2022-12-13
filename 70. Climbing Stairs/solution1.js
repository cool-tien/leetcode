/**
    O(n)
    59 ~ 88 ms      (57.42% ~ 95.50%)
    41.9 ~ 42.1 MB  (31.39% ~ 54.13%)

    https://leetcode.com/problems/climbing-stairs/submissions/858386162/
        Runtime 88 ms, Beats 57.42%; Memory 42.0 MB, Beats 31.39%
    https://leetcode.com/problems/climbing-stairs/submissions/858391954/
        Runtime 69 ms, Beats 82.87%; Memory 41.9 MB, Beats 54.13%
    https://leetcode.com/problems/climbing-stairs/submissions/858392217/
        Runtime 59 ms, Beats 95.50%; Memory 42.1 MB, Beats 31.39%

 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) return 1;

    let step = [1, 2];
    
    for(let i=2; i<n; i++)
        [step[0], step[1]] = [step[1], step[0] + step[1]];
    return step[1];
};