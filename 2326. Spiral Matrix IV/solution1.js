/**
    https://leetcode.com/submissions/detail/743392815/
    Runtime: 914 ms, faster than 27.47% of JavaScript online submissions for Spiral Matrix IV.
    Memory Usage: 103.4 MB, less than 53.30% of JavaScript online submissions for Spiral Matrix IV.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
 var spiralMatrix = function(m, n, head) {
    class xy{
        constructor(x=0, y=0){
            this.x = x;
            this.y = y;
        }
    }
    
    //  check move and get next action
    const getNextAction = (move, cur, arr) => {
        //  next step value (x, y)
        let x = cur.x + move[move.action].x;
        let y = cur.y + move[move.action].y;
        let m = arr.length;
        let n = arr[0].length;
        let next_action = {
            right: "down",
            down: "left",
            left: "up",
            up: "right"
        };
        
        //  or logic operation, if not a valid array range and filled, will return true first
        return (x==-1 || x==n || y==-1 || y==m || arr[y][x]!=-1)?
            next_action[move.action]:
            move.action;
    }
    
    let arr = new Array(m).fill().map(()=>new Array(n).fill(-1));
    let move = {
        action: "right",
        right: new xy(1, 0),
        down: new xy(0, 1),
        left: new xy(-1, 0),
        up: new xy(0, -1)
    }
    let cur = new xy();
    
    while(head){
        arr[cur.y][cur.x] = head.val;
        move.action = getNextAction(move, cur, arr);
        
        cur.x += move[move.action].x;
        cur.y += move[move.action].y;
        head = head.next;
    }
    
    return arr;
};