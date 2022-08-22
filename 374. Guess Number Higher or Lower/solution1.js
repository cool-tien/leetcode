/** 
    O(log n)
    72~92 ms (37.55%~75.29%)
    42.1~42.5 MB (0%~29.46%)

 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    let i = 1;
    
    while(i<=n){
        let mid = ~~(i + (n - i) / 2);
        let checked = guess(mid);
        
        //  checked > target
        if(checked === -1)
            n = mid - 1;
        //  checked < target
        else if(checked === 1)
            i = mid + 1;
        else
            return mid;
    }
};