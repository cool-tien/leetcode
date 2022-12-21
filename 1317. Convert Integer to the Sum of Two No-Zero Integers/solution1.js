/**
    O(n)
    92 ~ 97 ms      (57.35% ~ 61.76%)
    42.2 ~ 42.4 MB  (41.18% ~ 61.76%)

    https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/submissions/863108048/
        Runtime 92 ms, Beats 61.76%; Memory 42.4 MB, Beats 41.18%
    https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/submissions/863109103/
        Runtime 96 ms, Beats 57.35%; Memory 42.2 MB, Beats 61.76%
    https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/submissions/863109819/
        Runtime 97 ms, Beats 57.35%; Memory 42.4 MB, Beats 41.18%

 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const random = (max) =>
        parseInt(Math.random() * max) + 1;
    
    const existZero = (num) => {
        let str = num.toString();

        for(let c of str)
            if(c === '0')
                return true;
        return false;
    }

    let num1 = 0;
    let num2 = 0;
    
    while(existZero(num1) || existZero(num2)){
        num1 = random(n);
        num2 = n - num1;
    }

    return [num1, num2];
};