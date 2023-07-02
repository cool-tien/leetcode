/**
    Time Complexity: O(n)
        53 ~ 71 ms      (10.74% ~ 91.95%)
    Space Complexity: O(1)
        42.0 ~ 42.7 MB  ( 6.40% ~ 53.69%)
    
    https://leetcode.com/problems/three-divisors/submissions/984353685/
        Runtime 53 ms, Beats 91.95%; Memory 42.7 MB, Beats  6.40%; 
    https://leetcode.com/problems/three-divisors/submissions/984356319/
        Runtime 71 ms, Beats 10.74%; Memory 42.0 MB, Beats 53.69%; 
    https://leetcode.com/problems/three-divisors/submissions/984356966/
        Runtime 60 ms, Beats 72.48%; Memory 42.3 MB, Beats 28.19%; 
    
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count = 0;
    let i = n;

    while(i){
        if(n % i === 0) count ++;
        i--;
    }

    return (count === 3);
};