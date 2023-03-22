/**
    Time Complexity: O(n)
        53 ~ 72 ms      (70.62% ~ 99.50%)
    Space Complexity: O(n)
        43.6 ~ 44.3 MB  (49.29% ~ 91.47%)
    
    https://leetcode.com/problems/number-of-even-and-odd-bits/submissions/919843652/
        Runtime 72 ms, Beats 70.62%; Memory 43.6 MB, Beats 91.47%
    https://leetcode.com/problems/number-of-even-and-odd-bits/submissions/919843683/
        Runtime 53 ms, Beats 99.50%; Memory 43.8 MB, Beats 82.46%
    https://leetcode.com/problems/number-of-even-and-odd-bits/submissions/919843727/
        Runtime 67 ms, Beats 88.63%; Memory 44.3 MB, Beats 49.29%

 * @param {number} n
 * @return {number[]}
 */
const evenOddBit = n => {
    const bits = n.toString(2).split("").reverse();
    let result = [0, 0];

    for(let i=0; i<bits.length; i++)
        if(bits[i] === '1')
            result[i % 2]++;
    return result;
}