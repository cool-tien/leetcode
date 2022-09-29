/**
    O(n)
    68~101 ms    (45.52%~90.30%)
    41.9~42.8 MB (43.28%~94.78%)

    https://leetcode.com/submissions/detail/811047959/
        Runtime: 101 ms, faster than 45.52% of JavaScript online submissions for Path Crossing.
        Memory Usage: 41.9 MB, less than 94.78% of JavaScript online submissions for Path Crossing.
    https://leetcode.com/submissions/detail/811082005/
        Runtime: 68 ms, faster than 90.30% of JavaScript online submissions for Path Crossing.
        Memory Usage: 42.2 MB, less than 73.13% of JavaScript online submissions for Path Crossing.
    https://leetcode.com/submissions/detail/811082936/
        Runtime: 84 ms, faster than 72.39% of JavaScript online submissions for Path Crossing.
        Memory Usage: 42.8 MB, less than 43.28% of JavaScript online submissions for Path Crossing.

 * @param {string} path
 * @return {boolean}
 */
 var isPathCrossing = function(path) {
    let set = new Set(["0_0"]);
    let xy = {
        x: 0, 
        y: 0
    }
    
    for(let c of path){
        if(c === 'N')
            xy.y++;
        else if(c === 'S')
            xy.y--;
        else if(c === 'E')
            xy.x++;
        else if(c === 'W')
            xy.x--;
        
        if(set.has(`${xy.x}_${xy.y}`))
            return true;
        
        set.add(`${xy.x}_${xy.y}`);
    }
    
    return false;
};