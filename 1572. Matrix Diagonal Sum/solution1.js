/**
    O(n)
    91~107 ms    (35.50%~68.54%)
    43.7~44.0 MB (41.56%~57.00%)

    https://leetcode.com/submissions/detail/841748296/
        Runtime: 95 ms, faster than 61.47% of JavaScript online submissions for Matrix Diagonal Sum.
        Memory Usage: 43.7 MB, less than 57.00% of JavaScript online submissions for Matrix Diagonal Sum.
    https://www.tradingview.com/chart/sM68ujnI/
        Runtime: 91 ms, faster than 68.54% of JavaScript online submissions for Matrix Diagonal Sum.
        Memory Usage: 44 MB, less than 41.56% of JavaScript online submissions for Matrix Diagonal Sum.
    https://leetcode.com/submissions/detail/841749671/
        Runtime: 107 ms, faster than 35.50% of JavaScript online submissions for Matrix Diagonal Sum.
        Memory Usage: 43.8 MB, less than 57.00% of JavaScript online submissions for Matrix Diagonal Sum.

 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    let len = mat.length;
    let is_odd = len % 2;
    let sum = 0;
    let i = 0;
    let j = len - 1;
    
    while(i < len){
        //  primary diagonal
        sum += mat[i][i];
        //  secondary diagonal
        sum += mat[i][j];
        
        i++;
        j--;
    }
    
    //  deduct mid (primary and secodary cross same mid element)
    if(is_odd){
        let mid = ~~(len / 2);
        sum -= mat[mid][mid];
    }
    
    return sum;
};