/**
    Time Complexity: O(n)
        45 ~ 57 ms      (62.98% ~ 97.95%)
    Space Complexity: O(1)
        41.9 ~ 42.4 MB  (11.22% ~ 70.76%)
    
    https://leetcode.com/problems/apply-transform-over-each-element-in-array/submissions/938291745/
        Runtime 57 ms, Beats 62.98%; Memory 41.9 MB, Beats 70.76%; 
    https://leetcode.com/problems/apply-transform-over-each-element-in-array/submissions/938291852/
        Runtime 45 ms, Beats 97.95%; Memory 41.9 MB, Beats 58.63%; 
    https://leetcode.com/problems/apply-transform-over-each-element-in-array/submissions/938291968/
        Runtime 51 ms, Beats 88.56%; Memory 42.4 MB, Beats 11.22%; 

 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    arr.forEach((x, i) => arr[i] = fn(x, i));
    return arr;
};