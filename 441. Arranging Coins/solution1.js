/**
    O(log n)
    96~159 ms 
    43.8~44.5 MB 

    https://leetcode.com/submissions/detail/786773609/
    https://leetcode.com/submissions/detail/786771389/
    https://leetcode.com/submissions/detail/786767488/

 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
    let row = 0;
    let coin = 1;
    
    while(n-coin >= 0){
        n -= coin;
        
        coin++;
        row++;
    }
    
    return row;
};