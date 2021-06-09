/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    const isOdd = n=>n%2==1;
    
    if(isOdd(low) && isOdd(high))
        return (high-low)/2+1;
    else
        return (high-low)/2;
};