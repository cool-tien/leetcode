/**
    O(nm)
    59 ~ 80 ms      (82.75% ~ 99.76%)
    44.0 ~ 44.6 MB  (12.25% ~ 55.40%)

    https://leetcode.com/problems/toeplitz-matrix/submissions/863607940/
        Runtime 59 ms, Beats 99.76%; Memory 44.6 MB, Beats 12.25%
    https://leetcode.com/problems/toeplitz-matrix/submissions/863616856/
        Runtime 80 ms, Beats 82.75%; Memory 44.0 MB, Beats 55.40%
    https://leetcode.com/problems/toeplitz-matrix/submissions/863618151/
        Runtime 69 ms, Beats 95.57%; Memory 44.6 MB, Beats 15.93%

 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let row_len = matrix.length;
    let col_len = matrix[0].length;
    //  start from bottom-left to top-right
    let cur = {
        y: matrix.length - 1, 
        x: 0
    }
    let is_top = false;
    let is_right = false;
    
    //  if just 1 row, each diagonal element value must same
    if(row_len === 1) return true;

    //  from bottom-left, up to start of top, then move to end of right
    while(!is_top || !is_right){
        let arr = [];
        let i = cur.y;
        let j = cur.x;
        
        //  build diagonal (from top-left move to bottom-right)
        while(i>=0 && i < row_len && j>=0 && j < col_len)
            arr.push(matrix[i++][j++]);

        //  diagonal element value not same
        if(new Set(arr).size >= 2)
            return false;

        //  already at top, move to right
        if(is_top){
            cur.x++;
            
            if(cur.x === col_len)
                is_right = true;
        }
        //  move to top
        else{
            cur.y--;

            if(cur.y === 0)
                is_top = true;
        }
    }

    return true;
};