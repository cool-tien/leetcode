/**
    https://leetcode.com/submissions/detail/713265292/
    Runtime: 4617 ms, faster than 12.71% of JavaScript online submissions for Range Sum Query 2D - Immutable.
    Memory Usage: 67.3 MB, less than 81.97% of JavaScript online submissions for Range Sum Query 2D - Immutable.

 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    this.matrix = matrix;
    
    return this;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    
    for(let i=row1; i<=row2; i++)
        for(let j=col1; j<=col2; j++)
            sum += this.matrix[i][j];
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */