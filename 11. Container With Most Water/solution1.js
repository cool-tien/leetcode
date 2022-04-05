/**
    https://leetcode.com/submissions/detail/674082613/
    Runtime: 72 ms, faster than 94.05% of JavaScript online submissions for Container With Most Water.
    Memory Usage: 49.7 MB, less than 61.31% of JavaScript online submissions for Container With Most Water.
 * 
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let x1 = 0;
    let x2 = height.length-1;
    let max = 0;
    
    while(x2>=x1){
        let area = Math.min(height[x1], height[x2]) * (x2-x1);
        max = Math.max(max, area);
        
        height[x1]>height[x2]? x2--: x1++;
    }
    
    return max;
};