/**
    Time Complexity: O(n)
        44 ~ 56 ms          (24.75% ~ 87.87%)
    Space Complexity: O(1)
        48.70 ~ 49.12 MB    ( 7.14% ~ 65.78%)
    
    [Time taken: 1m 41s]
    https://leetcode.com/problems/harshad-number/submissions/1225351299/
        Runtime 56 ms Beats 24.75%; Memory 49.12 MB Beats  7.14%; 
    https://leetcode.com/problems/harshad-number/submissions/1225367209/
        Runtime 48 ms Beats 70.76%; Memory 48.78 MB Beats 52.82%; 
    https://leetcode.com/problems/harshad-number/submissions/1225369221/
        Runtime 44 ms Beats 87.87%; Memory 48.70 MB Beats 65.78%; 

 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum_digits = 0;

    for(const c of x.toString())
        sum_digits += parseInt(c);
    
    return (x % sum_digits === 0)? 
        sum_digits: -1;
};