/**
    O(n)
    127~135 ms   (51.78%~64.32%)
    44.6~45.5 MB (50.66%~92.56%)

    https://leetcode.com/submissions/detail/841736382/
        Runtime: 135 ms, faster than 51.78% of JavaScript online submissions for Reshape the Matrix.
        Memory Usage: 45.5 MB, less than 50.66% of JavaScript online submissions for Reshape the Matrix.
    https://leetcode.com/submissions/detail/841751537/
        Runtime: 127 ms, faster than 64.32% of JavaScript online submissions for Reshape the Matrix.
        Memory Usage: 44.6 MB, less than 92.56% of JavaScript online submissions for Reshape the Matrix.
    https://leetcode.com/submissions/detail/841751633/
        Runtime: 128 ms, faster than 63.10% of JavaScript online submissions for Reshape the Matrix.
        Memory Usage: 44.7 MB, less than 92.56% of JavaScript online submissions for Reshape the Matrix.

 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    let n = mat.length;
    let m = mat[0].length;
    
    //  unable to reshape
    if(n * m !== r * c) return mat;
    
    let reshape = new Array(r);
    let mat_idx = 0;
    mat = mat.flat();
    
    for(let i=0; i<r; i++){
        reshape[i] = mat.slice(mat_idx, mat_idx + c);
        mat_idx += c;
    }
    
    return reshape;
};