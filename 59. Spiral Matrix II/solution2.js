/**
    https://leetcode.com/submissions/detail/679982952/
    Runtime: 54 ms, faster than 97.86% of JavaScript online submissions for Spiral Matrix II.
    Memory Usage: 42.7 MB, less than 21.79% of JavaScript online submissions for Spiral Matrix II.

 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
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
        let n = arr.length;
        let next_action = {
            right: "down",
            down: "left",
            left: "up",
            up: "right"
        };
        
        //  or logic operation, if not a valid array range, will return true first
        return (x==-1 || x==n || y==-1 || y==n || arr[y][x]!=0)?
            next_action[move.action]:
            move.action;
    }
    
    let arr = new Array(n).fill().map(()=>new Array(n).fill(0));
    let num = 1;
    let len = n * n;
    //  current xy position and move object
    let cur = new xy();
    let move = {
        action: "right",
        right: new xy(1, 0),
        down: new xy(0, 1),
        left: new xy(-1, 0),
        up: new xy(0, -1)
    };
    
    while(num<=len){
        arr[cur.y][cur.x] = num;
        move.action = getNextAction(move, cur, arr);
        
        cur.x += move[move.action].x;
        cur.y += move[move.action].y;
        num += 1;
    }
    
    return arr;
};