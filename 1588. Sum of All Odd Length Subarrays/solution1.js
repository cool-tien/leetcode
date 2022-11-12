/**
    O(nm)
    74~110 ms    (47.53%~89.14%)
    47.3~48.0 MB (25.56%~31.73%)

    https://leetcode.com/submissions/detail/841070778/
        Runtime: 110 ms, faster than 47.53% of JavaScript online submissions for Sum of All Odd Length Subarrays.
        Memory Usage: 48 MB, less than 25.56% of JavaScript online submissions for Sum of All Odd Length Subarrays.
    https://leetcode.com/submissions/detail/841072966/
        Runtime: 74 ms, faster than 89.14% of JavaScript online submissions for Sum of All Odd Length Subarrays.
        Memory Usage: 47.3 MB, less than 31.73% of JavaScript online submissions for Sum of All Odd Length Subarrays.
    https://leetcode.com/submissions/detail/841073077/
        Runtime: 86 ms, faster than 80.99% of JavaScript online submissions for Sum of All Odd Length Subarrays.
        Memory Usage: 48 MB, less than 25.56% of JavaScript online submissions for Sum of All Odd Length Subarrays.

 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    
    for(let i=1; i<=arr.length; i+=2){
        let end_idx = arr.length - i;
        
        for(let j=0; j<=end_idx; j++)
            sum += arr.slice(j, j+i).reduce((a, b) => a + b);
    }
    
    return sum;
};