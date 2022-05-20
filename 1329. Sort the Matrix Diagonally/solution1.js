/**

    Runtime: 107 ms, faster than 62.30% of JavaScript online submissions for Sort the Matrix Diagonally.
    Memory Usage: 45.7 MB, less than 45.90% of JavaScript online submissions for Sort the Matrix Diagonally.

 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function(mat) {
    //  check is valid or over border
    const isValid = (x1, y1, x2, y2) => 
        (x1<=x2 && y1<=y2)
    
    let x = 0;
    let y = 0;
    let row_len = mat.length - 1;
    let col_len = mat[0].length - 1;
    
    while(x<col_len){
        let arr = [];
        let cur = 0;
        
        while(isValid(x+cur, y+cur, col_len, row_len)){
            arr.push(mat[y+cur][x+cur]);
            cur++;
        }
        
        arr.sort((a,b) => a-b);
        cur = 0;
        
        for(let num of arr){
            mat[y+cur][x+cur] = num;
            cur++;
        }
        
        x++;
    }
    
    x = 0;
    y = 1;
    while(y<row_len){
        let arr = [];
        let cur = 0;
        
        while(isValid(x+cur, y+cur, col_len, row_len)){
            arr.push(mat[y+cur][x+cur]);
            cur++;
        }
        
        arr.sort((a,b) => a-b);
        cur = 0;
        
        for(let num of arr){
            mat[y+cur][x+cur] = num;
            cur++;
        }
        
        y++;
    }
    
    return mat;
};