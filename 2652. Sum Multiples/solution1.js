/**
    Time Complexity: O(n)
        69 ~ 76 ms      (46.65% ~ 74.12%)
    Space Complexity: O(1)
        42.7 ~ 44.3 MB  (21.34% ~ 92.11%)

    https://leetcode.com/problems/sum-multiples/submissions/938161384/
        Runtime 76 ms, Beats 46.65%; Memory 44.3 MB, Beats 21.34%; 
    https://leetcode.com/problems/sum-multiples/submissions/940882955/
        Runtime 73 ms, Beats 58.33%; Memory 44.0 MB, Beats 37.28%; 
    https://leetcode.com/problems/sum-multiples/submissions/940884382/
        Runtime 69 ms, Beats 74.12%; Memory 42.7 MB, Beats 92.11%; 

 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let sum = 0;
    
    for(let i=3; i<=n; i++)
        if( (i % 3 === 0) || (i % 5 === 0) || (i % 7 === 0) )
            sum += i;
    return sum;
};