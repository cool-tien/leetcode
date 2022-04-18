/**
    https://leetcode.com/submissions/detail/682590105/
    Runtime: 79 ms, faster than 98.99% of JavaScript online submissions for Shift 2D Grid.
    Memory Usage: 47.9 MB, less than 44.62% of JavaScript online submissions for Shift 2D Grid.

 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
 var shiftGrid = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    grid = grid.flat();
    k = k % grid.length;
    
    grid = [...grid.splice(grid.length-k, k)].concat(grid);
    return [...Array(m)].map(()=>grid.splice(0, n));
};