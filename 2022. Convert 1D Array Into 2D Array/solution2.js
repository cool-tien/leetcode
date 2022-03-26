/**
 Runtime: 200 ms, faster than 99.73% of JavaScript online submissions for Convert 1D Array Into 2D Array.
 Memory Usage: 65 MB, less than 51.74% of JavaScript online submissions for Convert 1D Array Into 2D Array.

 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(m*n!=original.length) return [];
    
    let res = [];
    let row = [];
    
    for(let i=0; i<original.length; i++){
        if(i!=0 && i%n==0){
            res.push(row);
            row = [];
        }
        
        row.push(original[i]);
    }
    
    //  last row
    res.push(row);
    return res;
};