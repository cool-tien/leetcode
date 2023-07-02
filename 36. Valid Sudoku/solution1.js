/**
    Time Complexity: O(n²)
        97 ~ 101 ms     (13.83% ~ 16.36%)
    Space Complexity: O(n)
        47.4 ~ 48.2 MB  (16.56% ~ 25.10%)

    https://leetcode.com/problems/valid-sudoku/submissions/984382450/
        Runtime  99 ms, Beats 14.67%; Memory 48.0 MB, Beats 18.59%; 
    https://leetcode.com/problems/valid-sudoku/submissions/984405140/
        Runtime 101 ms, Beats 13.83%; Memory 48.2 MB, Beats 16.56%; 
    https://leetcode.com/problems/valid-sudoku/submissions/984405613/
        Runtime  97 ms, Beats 16.36%; Memory 47.4 MB, Beats 25.10%; 

 * @param {Array} board 
 * @returns boolean
 */
var isValidSudoku = function(board) {
    //  Helper for check is "arr" repeat?
    const isRepeat = (arr) => {
        let set = new Set();

        for(const c of arr){
            if(c === '.') continue;
            if(set.has(c)) return true;
            
            set.add(c);
        }

        return false;
    }

    let col = new Array(9).fill().map(() => []);
    let box = new Array(3).fill().map(() => []);

    //  check all the row first
    for(const row of board)
        if(isRepeat(row)) return false;

    for(let i=0; i<board[0].length; i++){
        for(let j=0; j<board.length; j++){
            col[i][j] = board[j][i];
            
            const idx = ~~(j / 3);
            box[idx].push(board[j][i]);
        }

        //  check col
        if(isRepeat(col[i])) return false;
        //  check box
        if(i % 3 === 2){
            for(const arr of box)
                if(isRepeat(arr)) return false;
            //  reset box
            box = new Array(3).fill().map(() => []);
        }
    }

    //  the "board" was valid Sudoku
    return true;
};