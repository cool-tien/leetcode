/**
    Time Complexity: O(n)
        66 ~ 85 ms      ( 5.26% ~ 85.20%)
    Space Complexity: O(1)
        43.0 ~ 43.6 MB  (30.18% ~ 85.62%)
    
    https://leetcode.com/problems/function-composition/submissions/939291824/
        Runtime 77 ms, Beats 28.90%; Memory 43.4 MB, Beats 49.80%; 
    https://leetcode.com/problems/function-composition/submissions/939291892/
        Runtime 85 ms, Beats  5.26%; Memory 43.0 MB, Beats 85.62%;
    https://leetcode.com/problems/function-composition/submissions/939291963/
        Runtime 66 ms, Beats 85.20%; Memory 43.6 MB, Beats 30.18%;

 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if(functions.length)
        return x => functions.reduceRight((acc, fn) => fn(acc), x);
    else
        return x => x;
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */