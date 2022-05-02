/**

    

 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if(numRows == 1) return [[1]];
    else if(numRows == 2) return [[1], [1, 1]];
    
    let res = [[1], [1, 1]];
    
    for(let i=2; i<numRows; i++){
        let row = [];
        
        for(let j=0; j<i-1; j++)
            row[j] = res[i-1][j] + res[i-1][j+1];
        
        row.unshift(1);
        row.push(1);
        res.push(row);
    }
    
    return res;
};