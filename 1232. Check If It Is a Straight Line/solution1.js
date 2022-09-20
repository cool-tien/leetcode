/**
    O(n)
    93~104 ms    (38.33%~55.75%)
    43.6~44.0 MB (64.11%~86.76%)

    https://leetcode.com/submissions/detail/804454782/#/
        Runtime: 104 ms, faster than 38.33% of JavaScript online submissions for Check If It Is a Straight Line.
        Memory Usage: 44 MB, less than 64.11% of JavaScript online submissions for Check If It Is a Straight Line.
    https://leetcode.com/submissions/detail/804457392/#/
        Runtime: 98 ms, faster than 47.39% of JavaScript online submissions for Check If It Is a Straight Line.
        Memory Usage: 43.6 MB, less than 86.76% of JavaScript online submissions for Check If It Is a Straight Line.
    https://leetcode.com/submissions/detail/804457500/#/
        Runtime: 93 ms, faster than 55.75% of JavaScript online submissions for Check If It Is a Straight Line.
        Memory Usage: 43.8 MB, less than 69.69% of JavaScript online submissions for Check If It Is a Straight Line.

 * @param {number[][]} coordinates
 * @return {boolean}
 */
 var checkStraightLine = function(coordinates) {
    let diff_x = coordinates[1][0] - coordinates[0][0];
    let diff_y = coordinates[1][1] - coordinates[0][1];
    //  vertical | horizontal | slope
    let direction = (diff_y === 0)? 
        "vertical": (diff_x === 0)?
        "horizontal": "slope";
    
    if(direction === "viertical"){
        for(let i=2; i<coordinates.length; i++)
            if(coordinates[i][1] !== coordinates[i-1][1])
                return false;
    }
    else if(direction === "horizontal"){
        for(let i=2; i<coordinates.length; i++)
            if(coordinates[i][0] !== coordinates[i-1][0])
                return false;
    }
    else{
        let diff_m = diff_y / diff_x;
        
        for(let i=2; i<coordinates.length; i++){
            let x = coordinates[i][0] - coordinates[i-1][0];
            let y =coordinates[i][1] - coordinates[i-1][1];
            let m = y / x;
            
            if(diff_m !== m)
                return false;
        }
    }
    
    return true;
};