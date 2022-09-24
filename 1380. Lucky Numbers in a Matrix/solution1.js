/**
    O(nm)
    79~104 ms    (52.03%~77.03%)
    44.1~44.7 MB (45.95%~91.89%)

    https://leetcode.com/submissions/detail/807200680/
        Runtime: 104 ms, faster than 52.03% of JavaScript online submissions for Lucky Numbers in a Matrix.
        Memory Usage: 44.7 MB, less than 45.95% of JavaScript online submissions for Lucky Numbers in a Matrix.
    https://leetcode.com/submissions/detail/807203726/
        Runtime: 90 ms, faster than 68.24% of JavaScript online submissions for Lucky Numbers in a Matrix.
        Memory Usage: 44.1 MB, less than 91.89% of JavaScript online submissions for Lucky Numbers in a Matrix.
    https://leetcode.com/submissions/detail/807203808/
        Runtime: 79 ms, faster than 77.03% of JavaScript online submissions for Lucky Numbers in a Matrix.
        Memory Usage: 44.1 MB, less than 91.89% of JavaScript online submissions for Lucky Numbers in a Matrix.

 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
    let lucky_num = -1;
    
    //  loop row
    for(let i=0; i<matrix.length; i++){
        let is_lucky = true;
        //  index of min
        let idx = -1;
        let min = Infinity;
        
        //  find the min number of row
        for(let j=0; j<matrix[i].length; j++)
            if(min > matrix[i][j]){
                min = matrix[i][j];
                idx = j;
            }
        
        //  check is it max number of column
        for(let j=0; j<matrix.length; j++)
            if(j === i) continue;
            else if(matrix[j][idx] > min){
                is_lucky = false;
                break;
            }
        
        if(is_lucky)
            lucky_num = min;
    }
    
    //  if not exist lucky number, return empty array
    return (lucky_num === -1)? []: [lucky_num];
};