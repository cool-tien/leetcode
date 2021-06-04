/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let res = [];
    
    for(let i=0; i<matrix[0].length; i++){
        let tmp = [];
        
        for(let j=0; j<matrix.length; j++)
            tmp.push(matrix[j][i]);
        res.push(tmp);
    }
    
    return res;
};