/**
    https://leetcode.com/submissions/detail/679604623/
    Runtime: 64 ms, faster than 84.02% of JavaScript online submissions for Spiral Matrix II.
    Memory Usage: 41.6 MB, less than 95.33% of JavaScript online submissions for Spiral Matrix II.

 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    function xy(x=0, y=0){
        this.x = x;
        this.y = y;
        
        return this;
    }
    
    //  check move and edit (move = xy Object)
    const getMove = (move, cur, arr) => {
        //  move xy value
        let x = move[move.action].x;
        let y = move[move.action].y;
        
        //  check right
        if(move.action=="right" && (cur.x+x==arr[0].length || arr[cur.y][cur.x+x]!=0))
            move.action = "down";
        //  check down
        else if(move.action=="down" && (cur.y+y==arr.length || arr[cur.y+y][cur.x]!=0))
            move.action = "left";
        //  check left
        else if(move.action=="left" && (cur.x+x==-1 || arr[cur.y][cur.x+x]!=0))
            move.action = "up";
        //  check up
        else if(move.action=="up" && (cur.y-y==-1 || arr[cur.y+y][cur.x]!=0))
            move.action = "right";
        
        return move;
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
        move = getMove(move, cur, arr);
        
        cur.x += move[move.action].x;
        cur.y += move[move.action].y;
        num += 1;
    }
    
    return arr;
};