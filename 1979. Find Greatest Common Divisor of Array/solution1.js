/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let [min, max] = [Math.min(...nums), Math.max(...nums)];
    let divisor = 1;
    
    for(let i=2; i<=min; i++){
        let flag1 = false, flag2 = false;
        
        if(min/i==parseInt(min/i))
            flag1 = true;
        if(max/i==parseInt(max/i))
            flag2 = true;
        
        if(flag1 && flag2)
            divisor = i;
    }
    
    return divisor;
};