/**
    O(n)
    91~116 ms
    44~45.5 MB

 * @param {string} s
 * @return {string[]}
 */
 var cellsInRange = function(s) {
    let arr = s.split(":");
    let i_start = arr[0][0].charCodeAt();
    let i_end = arr[1][0].charCodeAt();
    let j_start = +arr[0][1];
    let j_end = +arr[1][1];
    let res = [];
    
    for(let i=i_start; i<=i_end; i++)
        for(let j=j_start; j<=j_end; j++)
            res.push(String.fromCharCode(i) + j);
    return res;
};