/**
    https://leetcode.com/submissions/detail/690083851/
    Runtime: 83 ms, faster than 87.28% of JavaScript online submissions for Set Matrix Zeroes.
    Memory Usage: 44.7 MB, less than 81.73% of JavaScript online submissions for Set Matrix Zeroes.

 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let rows = new Set();
    let cols = new Set();
    
    for(let i=0; i<matrix.length; i++)
        for(let j=0; j<matrix[i].length; j++)
            //  exist in "rows" and "cols", not need add again
            if(rows.has(i) && cols.has(j))
                continue;
            else if(matrix[i][j] === 0){
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
};