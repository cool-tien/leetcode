/**
    https://leetcode.com/submissions/detail/690226772/
    Runtime: 46 ms, faster than 99.86% of JavaScript online submissions for Search a 2D Matrix.
    Memory Usage: 42.3 MB, less than 54.53% of JavaScript online submissions for Search a 2D Matrix.

 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    //  row last index
    let last = matrix[0].length - 1;
    
    for(let i=0; i<matrix.length; i++)
        if(matrix[i][last] >= target)
            return matrix[i].includes(target);
    return false;
};