/**
    O(n)
    78 ~ 98 ms      (47.87% ~ 79.87%)
    41.3 ~ 42.2 MB  (49.73% ~ 99.53%)
    
    https://leetcode.com/submissions/detail/846776778/
        Runtime: 78 ms, faster than 79.87% of JavaScript online submissions for Pascal's Triangle II.
        Memory Usage: 41.3 MB, less than 98.87% of JavaScript online submissions for Pascal's Triangle II.
    https://leetcode.com/submissions/detail/846778349/
        Runtime: 96 ms, faster than 52.40% of JavaScript online submissions for Pascal's Triangle II.
        Memory Usage: 41.3 MB, less than 99.53% of JavaScript online submissions for Pascal's Triangle II.
    https://leetcode.com/submissions/detail/846779864/
        Runtime: 98 ms, faster than 47.87% of JavaScript online submissions for Pascal's Triangle II.
        Memory Usage: 42.2 MB, less than 49.73% of JavaScript online submissions for Pascal's Triangle II.

 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    if(rowIndex === 1) return [1, 1];
    
    let row = [1, 2, 1];
    
    for(let i=2; i<rowIndex; i++){
        
        for(let j=row.length-1; j>=1; j--)
            row[j] += row[j-1];
        row.push(1);
    }
    
    return row;
};