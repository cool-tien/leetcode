/**
    Time Complexity: O(n)
        51 ~ 63 ms      (26.98% ~ 89.36%)
    Space Complexity: O(n)
        41.6 ~ 42.4 MB  (13.69% ~ 87.97%)

    https://leetcode.com/problems/filter-elements-from-array/submissions/938287935/
        Runtime 51 ms, Beats 89.36%; Memory 42.4 MB, Beats 21.78%; 
    https://leetcode.com/problems/filter-elements-from-array/submissions/938288876/
        Runtime 63 ms, Beats 26.98%; Memory 42.4 MB, Beats 13.69%; 
    https://leetcode.com/problems/filter-elements-from-array/submissions/938289098/
        Runtime 58 ms, Beats 59.77%; Memory 41.6 MB, Beats 87.97%; 

 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let output = [];

    for(let i=0; i<arr.length; i++)
        if(fn(arr[i], i))
            output.push(arr[i]);
    return output;
};