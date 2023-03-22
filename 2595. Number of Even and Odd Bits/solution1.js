/**
    Time Complexity: O(n)
        67 ~ 69 ms      (82.94% ~ 88.63%)
    Space Complexity: O(n)
        43.5 ~ 44.1 MB  (64.93% ~ 97.63%)
    
    https://leetcode.com/problems/number-of-even-and-odd-bits/submissions/919831845/
        Runtime 69 ms, Beats 82.94%; Memory 43.6 MB, Beats 95.26%;
    https://leetcode.com/problems/number-of-even-and-odd-bits/submissions/919831982/
        Runtime 67 ms, Beats 88.63%; Memory 43.5 MB, Beats 97.63%;
    https://leetcode.com/problems/number-of-even-and-odd-bits/submissions/919832338/
        Runtime 67 ms, Beats 88.63%; Memory 44.1 MB, Beats 64.93%;

 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    const bits = n.toString(2);
    let result = [0, 0];
    let index = 0;

    for(let i=bits.length; i>=0; i--){
        if(bits[i] === '1')
            (index % 2)?
                result[0]++:
                result[1]++
        index++;
    }
    
    return result;
};