/**
    Time Complexity: O(2n)
        70 ~ 75 ms      (20.30% ~ 38.23%)
    Space Complexity: O(n)
        42.0 ~ 42.3 MB  (10.46% ~ 39.85%

    https://leetcode.com/problems/count-the-digits-that-divide-a-number/submissions/886774910/
        Runtime 85 ms, Beats 20.30%; Memory 42.0 MB, Beats 39.85%
    https://leetcode.com/problems/count-the-digits-that-divide-a-number/submissions/886776760/
        Runtime 70 ms, Beats 38.23%; Memory 42.0 MB, Beats 39.85%
    https://leetcode.com/problems/count-the-digits-that-divide-a-number/submissions/886777005/
        Runtime 77 ms, Beats 24.16%; Memory 42.3 MB, Beats 10.46%

 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let str_digit = num.toString().split("");
    let count = 0;

    for(let digit of str_digit)
        if(num % (+digit) === 0)
            count++;
    return count;
};