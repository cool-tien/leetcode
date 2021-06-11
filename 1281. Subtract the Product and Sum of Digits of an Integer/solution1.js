/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let nums = n.toString().split("").map(x=>Number(x));
    let product = 1;
    let sum = 0;
    
    for(let num of nums){
        product *= num;
        sum += num;
    }
    
    return product-sum;
};