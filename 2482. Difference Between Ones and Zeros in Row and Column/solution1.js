/**
    Time Complexity: O(3nm)
        457 ~ 487 ms    (59.42% ~ 69.56%)
    Space Complexity: O(3nm)
        87.8 ~ 88.3 MB  (60.87%)

    https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/submissions/898844939/
        Runtime 487 ms, Beats 59.42%; Memory 88.2 MB, Beats 60.87%
    https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/submissions/898845605/
        Runtime 486 ms, Beats 59.42%; Memory 88.3 MB, Beats 60.87%
    https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/submissions/898845918/
        Runtime 457 ms, Beats 69.56%; Memory 87.8 MB, Beats 60.87%

 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    let row_len = grid.length;
    let col_len = grid[0].length;
    let ones_row = new Array(row_len);
    let ones_col = new Array(col_len);
    let zeros_row = new Array(row_len);
    let zeros_col = new Array(col_len);
    let diff = new Array(row_len).fill().map(() => new Array(col_len).fill(0));

    //  count row zeros and ones
    for(let i=0; i<row_len; i++){
        let ones = grid[i].reduce((a, b) => a + b, 0);
        
        zeros_row[i] = row_len - ones;
        ones_row[i] = ones;
    }
    
    //  count col zeros and ones
    for(let j=0; j<col_len; j++){
        let ones = 0;

        for(let i=0; i<row_len; i++)
            if(grid[i][j])
                ones++;
        
        zeros_col[j] = col_len - ones;
        ones_col[j] = ones;
    }
    
    //  count the diff
    for(let i=0; i<row_len; i++){
        for(let j=0; j<col_len; j++){
            diff[i][j] = ones_row[i] + ones_col[j] - zeros_row[i] - zeros_col[j];
        }
    }

    return diff;
};