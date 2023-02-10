/**
    Time Complexity: O(2n)
        62 ~ 85 ms      (31.25% ~ 95.00%)
    Space Complexity: O(n)
        43.8 ~ 44.3 MB  (33.75% ~ 50.00%)
    
    https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/submissions/895052042/
        Runtime 85 ms, Beats 31.25%; Memory 44.3 MB, Beats 33.75%
    https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/submissions/895053003/
        Runtime 78 ms, Beats 50.00%; Memory 44.3 MB, Beats 35.00%
    https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/submissions/895053196/
        Runtime 62 ms, Beats 95.00%; Memory 43.8 MB, Beats 50.00%

 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let matrix = new Array(m);

    //  initial
    for(let i=0; i<matrix.length; i++){
        matrix[i] = [];

        for(let j=0; j<n; j++)
            matrix[i][j] = 0;
    }
    
    for(let [r, c] of indices){
        for(let i=0; i<matrix[0].length; i++)
            matrix[r][i] += 1;

        for(let i=0; i<matrix.length; i++)
            matrix[i][c] += 1;
    }

    //  count odd numbers
    let odds = 0;
    for(let arr of matrix)
        for(let num of arr)
            if(num % 2)
                odds++;
    return odds;
};