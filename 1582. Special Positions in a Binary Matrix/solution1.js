/**
    O(nm²)
    72~124 ms    (35.80%~98.77%)
    44.4~45.2 MB (25.93%~82.72%)
    
    https://leetcode.com/submissions/detail/811797140/
        Runtime: 124 ms, faster than 35.80% of JavaScript online submissions for Special Positions in a Binary Matrix.
        Memory Usage: 45.2 MB, less than 25.93% of JavaScript online submissions for Special Positions in a Binary Matrix.
    https://leetcode.com/submissions/detail/811801049/
        Runtime: 80 ms, faster than 91.36% of JavaScript online submissions for Special Positions in a Binary Matrix.
        Memory Usage: 44.4 MB, less than 82.72% of JavaScript online submissions for Special Positions in a Binary Matrix.
    https://leetcode.com/submissions/detail/811804521/
        Runtime: 72 ms, faster than 98.77% of JavaScript online submissions for Special Positions in a Binary Matrix.
        Memory Usage: 44.7 MB, less than 61.73% of JavaScript online submissions for Special Positions in a Binary Matrix.

 * @param {number[][]} mat
 * @return {number}
 */
 var numSpecial = function(mat) {
    const isSpecial = (mat, x, y) => {
        //  left
        for(let i=x-1; i>=0; i--)
            if(mat[y][i] === 1)
                return false;
        //  right
        for(let i=x+1; i<mat[y].length; i++)
            if(mat[y][i] === 1)
                return false;
        //  up
        for(let i=y-1; i>=0; i--)
            if(mat[i][x] === 1)
                return false;
        //  down
        for(let i=y+1; i<mat.length; i++)
            if(mat[i][x] === 1)
                return false;
        
        return true;
    }
    
    let special = 0;
    
    for(let i=0; i<mat.length; i++)
        for(let j=0; j<mat[0].length; j++)
            if(mat[i][j]===1 && isSpecial(mat, j, i)){
                    special++;
                    break;
            }
    
    return special;
};