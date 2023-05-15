/**
    Time Complexity: O(n)
        56 ~ 70 ms      (23.23% ~ 89.17%)
    Space Complexity: O(n)
        43.8 ~ 44.6 MB  (48.62% ~ 96.65%)

    https://leetcode.com/problems/chunk-array/submissions/950493932/
        Runtime 70 ms, Beats 23.23%; Memory 44.5 MB, Beats 48.62%; 
    https://leetcode.com/problems/chunk-array/submissions/950494081/
        Runtime 56 ms, Beats 89.17%; Memory 43.8 MB, Beats 96.65%; 
    https://leetcode.com/problems/chunk-array/submissions/950494125/
        Runtime 62 ms, Beats 62.79%; Memory 44.6 MB, Beats 48.62%;

 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let output = [];
    
    for(let i=0; i<arr.length; i += size)
        output.push(arr.slice(i, i + size));
    return output;
};