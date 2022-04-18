/**
    https://leetcode.com/submissions/detail/682544697/
    Runtime: 79 ms, faster than 98.99% of JavaScript online submissions for Shift 2D Grid.
    Memory Usage: 47.9 MB, less than 44.62% of JavaScript online submissions for Shift 2D Grid.

 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
 var shiftGrid = function(grid, k) {
    let result = [];
    let row_len = grid[0].length;
    //  rebuild data value
    grid = grid.flat();
    k = k % grid.length;
    
    grid = [...grid.splice(grid.length-k, k)].concat(grid);
    
    while(grid.length)
        result.push(grid.splice(0, row_len));
    return result;
};