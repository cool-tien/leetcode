/**
    O(1)
    94~96 ms (33.85%~36.92%)
    41.5~42.2 MB (23.59%~98.46%)

 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
    let len = num.toString(2).length;
    let max = (2 ** len) - 1;
    
    return max ^ num;
};