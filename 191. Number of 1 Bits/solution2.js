/**
    Time Complexity: O(1) 
        54 ~ 71 ms      (26.50% ~ 93.66%)
    Space Complexity: O(1) 
        41.8 ~ 42.4 MB  (65.40% ~ 96.53%)
    
    https://leetcode.com/problems/number-of-1-bits/submissions/966290219/
        Runtime 67 ms, Beats 45.40%; Memory 42.2 MB, Beats 80.87%; 
    https://leetcode.com/problems/number-of-1-bits/submissions/966293668/
        Runtime 71 ms, Beats 26.50%; Memory 41.8 MB, Beats 96.53%; 
    https://leetcode.com/problems/number-of-1-bits/submissions/966293999/
        Runtime 54 ms, Beats 93.66%; Memory 42.4 MB, Beats 65.40%; 

 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ones = 0;

    for(let i=0; i<32; i++){
        ones += (n & 1);
        n >>= 1;
    }
    
    return ones;
};