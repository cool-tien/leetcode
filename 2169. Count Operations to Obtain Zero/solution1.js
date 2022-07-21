/**
    O(n) | 66~81ms

    https://leetcode.com/submissions/detail/752518919/
    Runtime: 66 ms, faster than 92.73% of JavaScript online submissions for Count Operations to Obtain Zero.
    Memory Usage: 42.4 MB, less than 21.82% of JavaScript online submissions for Count Operations to Obtain Zero.

 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
 var countOperations = function(num1, num2) {
    let operation = 0;
    
    while(num1!=0 && num2!=0){
        (num1 > num2)? 
            num1 -= num2: 
            num2 -= num1;
        
        operation++;
    }
    
    return operation;
};