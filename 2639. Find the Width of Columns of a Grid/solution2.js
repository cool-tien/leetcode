/**
    Time Complexity: O(nm)
        57 ~ 64 ms      (77.92% ~ 97.40%)
    Space Complexity: O(m)
        44.5 ~ 45.0 MB  (48.92% ~ 91.34%)

    https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/submissions/939359509/
        Runtime 62 ms, Beats 87.88%; Memory 44.5 MB, Beats 91.34%; 
    https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/submissions/939359584/
        Runtime 57 ms, Beats 97.40%; Memory 45.5 MB, Beats 48.92%; 
    https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/submissions/939359631/
        Runtime 64 ms, Beats 77.92%; Memory 45.0 MB, Beats 69.70%; 

 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    return new Array(grid[0].length).fill().map((x, col) => {
        let width = 0;

        for(let row=0; row<grid.length; row++)
            width = Math.max(width, grid[row][col].toString().length)
        return width;
    });
};