/**
    Time Complexity: O(n)
        63 ~ 89 ms      ( 5.26% ~ 91.94%)
    Space Complexity: O(1)
        43.0 ~ 43.6 MB  (21.87% ~ 80.40%)

    https://leetcode.com/problems/function-composition/submissions/939287584/
        Runtime 89 ms, Beats  5.26%; Memory 43.6 MB, Beats 21.87%
    https://leetcode.com/problems/function-composition/submissions/939287662/
        Runtime 82 ms, Beats  9.68%; Memory 43.6 MB, Beats 21.87%
    https://leetcode.com/problems/function-composition/submissions/939287717/
        Runtime 63 ms, Beats 91.94%; Memory 43.0 MB, Beats 80.40%

 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let last_idx = functions.length - 1;

	return function(x) {
        let sum = x;
        
        for(let i=last_idx; i>=0; i--)
            sum = functions[i](sum);
        return sum;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */