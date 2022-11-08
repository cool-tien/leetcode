/**
    O(n)
    99~142 ms    (74.58%~93.22%)
    50.4~50.6 MB (50.12%~76.76%)

    https://leetcode.com/submissions/detail/839080907/
        Runtime: 99 ms, faster than 93.22% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
        Memory Usage: 50.6 MB, less than 64.16% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
    https://leetcode.com/submissions/detail/839081568/
        Runtime: 142 ms, faster than 74.58% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
        Memory Usage: 50.6 MB, less than 50.12% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
    https://leetcode.com/submissions/detail/839081830/
        Runtime: 109 ms, faster than 87.41% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
        Memory Usage: 50.4 MB, less than 76.76% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.

 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
    let distance = Infinity;
    let index = -1;
    
    for(let i=0; i<points.length; i++){
        if(x === points[i][0] || y === points[i][1]){
            let num = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
            
            if(distance > num){
                distance = num;
                index = i;
            }    
        }
    }
    
    return index;
};