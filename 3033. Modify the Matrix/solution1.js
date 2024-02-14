/**
    Time Complexity: O(n)
        81 ~ 93 ms          (17.28% ~ 65.07%)
    Space Complexity: O(1)
        54.38 ~ 54.87 MB    (36.40% ~ 59.56%)

    https://leetcode.com/problems/modify-the-matrix/submissions/1174775482/
        Runtime 93 ms Beats 17.28%; Memory 54.78 MB Beats 43.38%; 
    https://leetcode.com/problems/modify-the-matrix/submissions/1174778767/
        Runtime 81 ms Beats 65.07%; Memory 54.87 MB Beats 36.40%; 
    https://leetcode.com/problems/modify-the-matrix/submissions/1174784812/
        Runtime 82 ms Beats 60.29%; Memory 54.38 MB Beats 59.56%; 

 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    for(let x=0; x<matrix[0].length; x++){
        let arr_index = [];
        let max = 0;

        for(let y=0; y<matrix.length; y++){
            if(matrix[y][x] === -1)
                arr_index.push(y);
            
            max = Math.max(max, matrix[y][x]);
        }
        
        for(const index of arr_index)
            matrix[index][x] = max;
    }
    
    return matrix;
};