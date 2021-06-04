/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let res = [0, 1];
    
    for(let i=2; i<=n; i++)
        res.push(res[i-2]+res[i-1]);
    return res[n];
};