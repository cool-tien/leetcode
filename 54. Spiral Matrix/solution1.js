/**
    https://leetcode.com/submissions/detail/690602569/
    Runtime: 63 ms, faster than 80.61% of JavaScript online submissions for Spiral Matrix.
    Memory Usage: 42.1 MB, less than 28.66% of JavaScript online submissions for Spiral Matrix.

 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    function xy(x=0, y=0){
        this.x = x;
        this.y = y;
        
        return this;
    }
    
    //  check move and get next action
    const getNextAction = (move, cur, arr) => {
        //  next step value (x, y)
        let x = cur.x + move[move.action].x;
        let y = cur.y + move[move.action].y;
        let x_len = arr[0].length;
        let y_len = arr.length;
        let next_action = {
            right: "down",
            down: "left",
            left: "up",
            up: "right"
        };
        
        //  or logic operation, if not a valid array range, will return true first
        return (x==-1 || x==x_len || y==-1 || y==y_len || arr[y][x]==null)?
            next_action[move.action]:
            move.action;
    }
    
    let res = [];
    let len = matrix.length * matrix[0].length;
    //  current xy position and move object
    let cur = new xy();
    let move = {
        action: "right",
        right: new xy(1, 0),
        down: new xy(0, 1),
        left: new xy(-1, 0),
        up: new xy(0, -1)
    };
    let i = 0;
    
    while(i<len){
        let val = matrix[cur.y][cur.x];
        matrix[cur.y][cur.x] = null;
        res.push(val);
        
        move.action = getNextAction(move, cur, matrix);
        cur.x += move[move.action].x;
        cur.y += move[move.action].y;
        
        i += 1;
    }
    
    return res;
};