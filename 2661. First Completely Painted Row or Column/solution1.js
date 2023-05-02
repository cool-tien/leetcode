/**
    Time Complexity: O(nm)
        268 ~ 318 ms    (28.74% ~ 33.33%)
    Space Complexity: O(n)
        114 ~ 115.4 MB  (12.64%)

    https://leetcode.com/problems/first-completely-painted-row-or-column/submissions/942934733/
        Runtime 318 ms, Beats 28.74%; Memory 114.7 MB, Beats 12.64%; 
    https://leetcode.com/problems/first-completely-painted-row-or-column/submissions/942934799/
        Runtime 268 ms, Beats 33.33%; Memory 115.4 MB, Beats 12.64%; 
    https://leetcode.com/problems/first-completely-painted-row-or-column/submissions/942934836/
        Runtime 318 ms, Beats 28.74%; Memory 114.0 MB, Beats 12.64%;

 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let hash = new Map();
    let row_map = new Map();
    let col_map = new Map();
    let row_len = mat[0].length;
    let col_len = mat.length;

    //  build hash map
    for(let y=0; y<mat.length; y++)
        for(let x=0; x<mat[y].length; x++)
            hash.set(mat[y][x], { y, x });
    
    for(let i=0; i<arr.length; i++){
        const { y, x } = hash.get(arr[i]);
        let row = row_map.get(y) || [];
        let col = col_map.get(x) || [];
        
        row.push(x);
        col.push(y);

        if(row.length == row_len)
            return i;
        else
            row_map.set(y, row);

        if(col.length == col_len)
            return i;
        else
            col_map.set(x, col);
    }

    return 0;
};