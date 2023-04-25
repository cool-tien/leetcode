/**
    Time Complexity: O(nm)
        69 ~ 79 ms      (14.72% ~ 56.28%)
    Space Complexity: O(m)
        45.3 ~ 45.7 MB  (34.20% ~ 61.47%)
    
    https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/submissions/939355243/
        Runtime 69 ms, Beats 56.28%; Memory 45.3 MB, Beats 61.47%;
    https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/submissions/939355763/
        Runtime 79 ms, Beats 14.72%; Memory 45.7 MB, Beats 34.20%;
    https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/submissions/939355833/
        Runtime 76 ms, Beats 23.38%; Memory 45.3 MB, Beats 56.28%;

 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    let col_len = grid[0].length;
    let row_len = grid.length;
    let widths = [];
    
    for(let col_idx=0; col_idx<col_len; col_idx++){
        let width = 0;

        for(let row_idx=0; row_idx<row_len; row_idx++){
            let str_len = grid[row_idx][col_idx].toString().length;
            
            width = Math.max(width, str_len);
        }
        
        widths.push(width);
    }
    
    return widths;
};