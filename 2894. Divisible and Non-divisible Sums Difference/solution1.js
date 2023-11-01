/**
    Time Complexity: O(n)
        59 ~ 73 ms          ( 5.65% ~ 46.83%)
    Space Complexity: O(1)
        41.84 ~ 42.61 MB    (29.75% ~ 95.32%)

    https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/submissions/1088774419/
        61 ms Beats 37.47%; 42.08 MB Beats 84.99%; 
    https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/submissions/1088776289/
        73 ms Beats  5.65%; 41.84 MB Beats 95.32%; 
    https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/submissions/1088776850/
        59 ms Beats 46.83%; 42.61 MB Beats 29.75%;
    
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let sum_of_num1 = 0; 
    let sum_of_num2 = 0; 

    for(let i=1; i<=n; i++)
        (i % m === 0)?
            sum_of_num2 += i: 
            sum_of_num1 += i;
    
    return sum_of_num1 - sum_of_num2;
};