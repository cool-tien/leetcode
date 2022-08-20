/**
 * @param {number} n
 * @return {boolean}
 */
 const isPowerOfFour = n => {
    if(n===0) return false;
    if(n===1) return true;
    
    let power_four = 1;
    
    while(power_four < n){
        power_four *= 4;
        
        if(n === power_four)
            return true;
    }
    
    return false;
}