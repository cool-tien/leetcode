/**
    O(3n)
    95~102 ms    (36.12%~55.31%)
    41.2~42.4 MB (7.00%~100.00%)

    https://leetcode.com/submissions/detail/838381451/
        Runtime: 95 ms, faster than 55.31% of JavaScript online submissions for Maximum 69 Number.
        Memory Usage: 42.4 MB, less than 7.00% of JavaScript online submissions for Maximum 69 Number.
    https://leetcode.com/submissions/detail/838393742/
        Runtime: 96 ms, faster than 53.05% of JavaScript online submissions for Maximum 69 Number.
        Memory Usage: 42.1 MB, less than 42.66% of JavaScript online submissions for Maximum 69 Number.
    https://leetcode.com/submissions/detail/838393818/
        Runtime: 102 ms, faster than 36.12% of JavaScript online submissions for Maximum 69 Number.
        Memory Usage: 41.2 MB, less than 100.00% of JavaScript online submissions for Maximum 69 Number.

 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
    let arr = (""+num).split("");
    
    for(let i=0; i<arr.length; i++)
        if(arr[i] === '6'){
            arr[i] = '9';
            break;
        }
    
    return Number(arr.join(""));
};