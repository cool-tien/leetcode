/**
    Time Complexity: O(n) 
        94 ~ 109 ms         (67.84% ~ 90.94%)
    Space Complexity: O(n) 
        58.63 ~ 59.43 MB    (32.60% ~ 37.24%)
    
    https://leetcode.com/problems/equal-row-and-column-pairs/submissions/1161593473/
        Runtime  94 ms Beats 90.94%; Memory 58.63 MB Beats 37.24%; 
    https://leetcode.com/problems/equal-row-and-column-pairs/submissions/1161607081/
        Runtime 105 ms Beats 72.93%; Memory 59.43 MB Beats 32.60%; 
    https://leetcode.com/problems/equal-row-and-column-pairs/submissions/1161607179/
        Runtime 109 ms Beats 67.84%; Memory 59.37 MB Beats 33.04%; 
    
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let row_map = new Map();
    let col_map = new Map();
    let pairs = 0;

    //  build "row_map" hash map
    for(let i=0; i<grid[0].length; i++){
        let arr = [];

        for(let j=0; j<grid.length; j++)
            arr.push(grid[i][j]);

        let key = arr.join("_");
        row_map.set(key, (row_map.get(key) || 0) + 1);
    }

    //  build "col_map" hash map
    for(let i=0; i<grid[0].length; i++){
        let arr = [];

        for(let j=0; j<grid.length; j++)
            arr.push(grid[j][i]);

        let key = arr.join("_");
        col_map.set(key, (col_map.get(key) || 0) + 1);
    }

    //  count the pairs
    for(const [key, _] of [...row_map])
        if(col_map.has(key))
            pairs += row_map.get(key) * col_map.get(key);
            // pairs += Math.max(row_map.get(key), col_map.get(key));
    return pairs;
}