/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let remain = num%9;
    
    if(remain)
        return remain;
    
    while(num>=10)
        num = (num).toString().split("").map(x=>Number(x)).reduce((a, b)=>a+b, 0);
    return num;
};