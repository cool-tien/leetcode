/**
    O(n²)
    54~97 ms     (40.70%~96.51%)
    41.7~41.8 MB (66.28%~74.42%)

    https://leetcode.com/submissions/detail/834379526/
        Runtime: 54 ms, faster than 96.51% of JavaScript online submissions for Available Captures for Rook.
        Memory Usage: 41.8 MB, less than 66.28% of JavaScript online submissions for Available Captures for Rook.
    https://leetcode.com/submissions/detail/834386828/
        Runtime: 97 ms, faster than 40.70% of JavaScript online submissions for Available Captures for Rook.
        Memory Usage: 41.7 MB, less than 74.42% of JavaScript online submissions for Available Captures for Rook.
    https://leetcode.com/submissions/detail/834386917/
        Runtime: 77 ms, faster than 72.09% of JavaScript online submissions for Available Captures for Rook.
        Memory Usage: 41.7 MB, less than 74.42% of JavaScript online submissions for Available Captures for Rook.

 * @param {character[][]} board
 * @return {number}
 */
 var numRookCaptures = function(board) {
    const ableAttack = ({x, y}, board) => {
        let count = 0;
        
        //  check up
        for(let i=y; i>=0; i--)
            if(board[i][x] === 'p'){
                count += 1;
                break;
            }
            else if(board[i][x] === 'B')
                break;
        //  check left
        for(let j=x; j>=0; j--)
            if(board[y][j] === 'p'){
                count += 1;
                break;
            }
            else if(board[y][j] === 'B')
                break;
        //  check right
        for(let j=x; j<board[0].length; j++)
            if(board[y][j] === 'p'){
                count += 1;
                break;
            }
            else if(board[y][j] === 'B')
                break;
        //  check down
        for(let i=y; i<board.length; i++)
            if(board[i][x] === 'p'){
                count += 1;
                break;
            }
            else if(board[i][x] === 'B')
                break;
        
        return count;
    }
    
    let rook = {};
    
    for(let i in board)
        for(let j in board[i])
            if(board[i][j] === 'R'){
                rook = {x:j, y:i};
                break;
            }
    
    return ableAttack(rook, board);
};