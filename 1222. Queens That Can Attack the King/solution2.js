/**
    https://leetcode.com/submissions/detail/708992922/
    Runtime: 75 ms, faster than 73.08% of JavaScript online submissions for Queens That Can Attack the King.
    Memory Usage: 45.3 MB, less than 15.38% of JavaScript online submissions for Queens That Can Attack the King.

 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
 var queensAttacktheKing = function(queens, king) {
    class xy{
        constructor(x, y){
            this.x = x;
            this.y = y;
        }
    }
    
    const isValid = (x, y) => 
        (x>=0 && x<=7) && (y>=0 && y<=7);
    
    let move = {
        types: ["top_left", "top", "top_right", "left", "right", "bottom_left", "bottom", "bottom_right"],
        
        top_left: new xy(-1, -1),
        top: new xy(0, -1),
        top_right: new xy(1, -1),
        left: new xy(-1, 0),
        right: new xy(1, 0),
        bottom_left: new xy(-1, 1),
        bottom: new xy(0, 1),
        bottom_right: new xy(1, 1)
    };
    let res = [];
    
    for(let type of move.types){
        let cur = new xy(king[1] + move[type].x, king[0] + move[type].y);
        
        while(isValid(cur.x, cur.y)){
            let found = false;
            //  after filter list
            let filter = [];
            
            if(type=="left" || type=="right")
                filter = queens.filter(arr => arr[0]==king[0]);
            else if(type=="top" || type=="bottom")
                filter = queens.filter(arr => arr[1]==king[1]);
            else
                filter = queens;
            
            for(let queen of filter)
                if(cur.x==queen[1] && cur.y==queen[0]){
                    res.push(queen);
                    found = true;
                    break;
                }
            
            if(found)
                break;
            
            cur.x += move[type].x;
            cur.y += move[type].y;
        }
    }
    
    return res;
};