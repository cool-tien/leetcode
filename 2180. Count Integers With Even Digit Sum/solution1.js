/**
    Time Complexity: O(2n)
        58 ~ 79 ms      (39.82% ~ 99.11%)
    Space Complexity: O(1)
        44.0 ~ 44.3 MB  (29.20% ~ 38.50%)
    
    https://leetcode.com/problems/count-integers-with-even-digit-sum/submissions/892347555/
        Runtime 58 ms, Beats 99.11%; Memory 44.3 MB, Beats 29.20%
    https://leetcode.com/problems/count-integers-with-even-digit-sum/submissions/892352664/
        Runtime 72 ms, Beats 61.95%; Memory 44.0 MB, Beats 38.50%
    https://leetcode.com/problems/count-integers-with-even-digit-sum/submissions/892352907/
        Runtime 79 ms, Beats 39.82%; Memory 44.2 MB, Beats 29.20%

 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    const is_even = num => (""+num).split("").reduce((a, b) => (+a) + (+b))%2 === 0;

    let count = 0;

    for(let i=1; i<=num; i++)
        if(is_even(i))
            count++;
    return count;
};