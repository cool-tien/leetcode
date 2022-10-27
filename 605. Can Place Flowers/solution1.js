/**
    O(n)
    68~115 ms    (40.25%~93.96%)
    44.2~44.7 MB (25.27%~61.26%)

    https://leetcode.com/submissions/detail/831096740/
        Runtime: 68 ms, faster than 93.96% of JavaScript online submissions for Can Place Flowers.
        Memory Usage: 44.2 MB, less than 61.26% of JavaScript online submissions for Can Place Flowers.
    https://leetcode.com/submissions/detail/831108538/
        Runtime: 108 ms, faster than 55.77% of JavaScript online submissions for Can Place Flowers.
        Memory Usage: 44.7 MB, less than 25.27% of JavaScript online submissions for Can Place Flowers.
    https://leetcode.com/submissions/detail/831108631/
        Runtime: 115 ms, faster than 40.25% of JavaScript online submissions for Can Place Flowers.
        Memory Usage: 44.4 MB, less than 45.05% of JavaScript online submissions for Can Place Flowers.

 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;
    
    while(i < flowerbed.length && n){
        let is_flower = (flowerbed[i]);
        
        //  increase 2, if current placed
        i += (is_flower)? 2: 1;
        //  decrease, if current and next empty 
        if(!is_flower && !flowerbed[i]){
            n--;
            i++;
        }
        
        if(!n)
           return true;
    }
    
    return !n;
};