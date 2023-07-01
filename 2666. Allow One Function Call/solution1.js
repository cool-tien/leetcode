/**
    Time Complexity: O(1)
        51 ~ 61 ms      (41.29% ~ 91.10%)
    Space Complexity: O(1)
        42.2 ~ 42.5 MB  ( 8.86% ~ 26.57%)
    
    https://leetcode.com/problems/allow-one-function-call/submissions/983865836/
        Runtime 51 ms, Beats 91.10%; Memory 42.2 MB, Beats 26.57%; 
    https://leetcode.com/problems/allow-one-function-call/submissions/983879549/
        Runtime 61 ms, Beats 41.29%; Memory 42.3 MB, Beats  8.86%;
    https://leetcode.com/problems/allow-one-function-call/submissions/983881217/
        Runtime 58 ms, Beats 60.46%; Memory 42.5 MB, Beats  8.86%;

 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let count = 0;

    return function(...args){
        if(!count){
            count++;

            return fn(...args);
        }
        else
            return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */