/**
    O(2nm)

    https://leetcode.com/contest/weekly-contest-323/problems/delete-greatest-value-in-each-row/
    https://leetcode.com/problems/delete-greatest-value-in-each-row/

 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let row_len = grid.length;
    let col_len = grid[0].length;
    let total = 0;
    
    //  soring each row
    grid.map(arr => arr.sort((a, b) => a - b));
    
    for(let col_idx=col_len-1; col_idx>=0; col_idx--){
        let max = 0;
        
        for(let row_idx=0; row_idx<row_len; row_idx++)
            if(max < grid[row_idx][col_idx])
                max = grid[row_idx][col_idx];
        total += max;
    }
    
    return total;
};