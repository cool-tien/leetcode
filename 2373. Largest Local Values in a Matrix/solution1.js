/**
    O(n)
    177~181 ms   (8.74%~10.54%)
    49.5~49.8 MB (7.23%~9.04%)

    https://leetcode.com/submissions/detail/824890263/
        Runtime: 181 ms, faster than 8.74% of JavaScript online submissions for Largest Local Values in a Matrix.
        Memory Usage: 49.8 MB, less than 7.23% of JavaScript online submissions for Largest Local Values in a Matrix.
    https://leetcode.com/submissions/detail/824891289/
        Runtime: 175 ms, faster than 10.54% of JavaScript online submissions for Largest Local Values in a Matrix.
        Memory Usage: 49.5 MB, less than 9.04% of JavaScript online submissions for Largest Local Values in a Matrix.
    https://leetcode.com/submissions/detail/824891451/
        Runtime: 177 ms, faster than 9.64% of JavaScript online submissions for Largest Local Values in a Matrix.
        Memory Usage: 49.5 MB, less than 9.04% of JavaScript online submissions for Largest Local Values in a Matrix.

 * @param {number[][]} grid
 * @return {number[][]}
 */
 var largestLocal = function(grid) {
    let n = grid.length - 3;
    let res = [];
    
    for(let i=0; i<=n; i++){
        let arr = [];
        
        for(let j=0; j<=n; j++){
            let matrix = [];
            let row_1 = grid[i].slice(j, j+3);
            let row_2 = grid[i+1].slice(j, j+3);
            let row_3 = grid[i+2].slice(j, j+3);
            
            matrix.push(...row_1, ...row_2, ...row_3);
            arr.push(Math.max(...matrix));
        }
        
        res.push(arr);
    }
    
    return res;
};