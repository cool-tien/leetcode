/**
    https://leetcode.com/submissions/detail/690029862/
    Runtime: 86 ms, faster than 81.68% of JavaScript online submissions for Set Matrix Zeroes.
    Memory Usage: 45.2 MB, less than 31.96% of JavaScript online submissions for Set Matrix Zeroes.

 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let rows = new Set();
    let cols = new Set();
    
    for(let i=0; i<matrix.length; i++)
        for(let j=0; j<matrix[i].length; j++)
            if(matrix[i][j] === 0){
                rows.add(i);
                cols.add(j);
            }
    
    //  change rows to 0
    for(let row of [...rows])
        matrix[row] = new Array(matrix[0].length).fill(0);
    
    //  change cols to 0
    for(let col of [...cols])
        for(let i=0; i<matrix.length; i++)
            matrix[i][col] = 0;
    
    return matrix;
};