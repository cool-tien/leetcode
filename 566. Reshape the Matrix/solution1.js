/**
    O(nm)
    81~139 ms (24.58%~96.62%)
    44.9~45.1 MB (74.07~88.01%)

    https://leetcode.com/submissions/detail/788439992/
        Runtime: 81 ms, faster than 96.62% of JavaScript online submissions for Reshape the Matrix.
        Memory Usage: 44.9 MB, less than 83.28% of JavaScript online submissions for Reshape the Matrix.
    https://leetcode.com/submissions/detail/788465378/
        Runtime: 139 ms, faster than 24.58% of JavaScript online submissions for Reshape the Matrix.
        Memory Usage: 45.1 MB, less than 74.07% of JavaScript online submissions for Reshape the Matrix.
    https://leetcode.com/submissions/detail/788466084/
        Runtime: 99 ms, faster than 79.31% of JavaScript online submissions for Reshape the Matrix.
        Memory Usage: 44.9 MB, less than 88.01% of JavaScript online submissions for Reshape the Matrix.

 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    //  unable to reshape
    if(mat.length*mat[0].length !== r*c) return mat;
    
    let n = mat.length;
    let m = mat[0].length;
    let reshape = new Array(r).fill().map(a => new Array(c));
    mat = mat.flat();
    
    for(let i=0; i<reshape.length; i++)
        for(let j=0; j<reshape[i].length; j++)
            reshape[i][j] = mat.shift();
    return reshape;
};