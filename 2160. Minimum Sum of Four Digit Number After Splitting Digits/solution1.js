/**
    O(4n) | 68~85ms

    https://leetcode.com/submissions/detail/751643969/
    Runtime: 81 ms, faster than 61.38% of JavaScript online submissions for Minimum Sum of Four Digit Number After Splitting Digits.
    Memory Usage: 42.7 MB, less than 9.29% of JavaScript online submissions for Minimum Sum of Four Digit Number After Splitting Digits.

 * @param {number} num
 * @return {number}
 */
 var minimumSum = function(num) {
    let arr = String(num).split("").map(c => ~~c).sort((a,b) => b-a);
    let str1 = "";
    let str2 = "";
    
    while(arr.length){
        str1 += arr.pop();
        str2 += (arr.pop() || "");
    }
    
    return (~~str1) + (~~str2);
};