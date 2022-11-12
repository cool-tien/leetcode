/**
    O(n)
    161~181 ms   (20.34%~50.85%)
    50.7~50.9 MB (26.63%~50.12%)

    https://leetcode.com/submissions/detail/839077088/
        Runtime: 161 ms, faster than 50.85% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
        Memory Usage: 50.7 MB, less than 50.12% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
    https://leetcode.com/submissions/detail/839079552/
        Runtime: 181 ms, faster than 20.34% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
        Memory Usage: 50.9 MB, less than 26.63% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
    https://leetcode.com/submissions/detail/839079648/
        Runtime: 161 ms, faster than 50.85% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
        Memory Usage: 50.7 MB, less than 38.74% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.

 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
    let distance = Infinity;
    let index = -1;
    
    for(let i=0; i<points.length; i++){
        let [x2, y2] = [points[i][0], points[i][1]];
        
        if(x === x2 || y === y2){
            let num = Math.abs(x - x2) + Math.abs(y - y2);
            
            if(distance > num){
                distance = num;
                index = i;
            }    
        }
    }
    
    return index;
};