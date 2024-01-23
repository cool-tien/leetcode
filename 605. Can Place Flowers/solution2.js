/**
    Time Complexity: O(n)
        48 ~ 68 ms          (20.97% ~ 94.85%)
    Space Complexity: O(i)
        42.22 ~ 52.06 MB    ( 5.49% ~ 55.31%)

    https://leetcode.com/problems/can-place-flowers/submissions/831096740/
        Runtime 68 ms Beats 20.97%; Memory 44.22 MB Beats 55.31%; 
    https://leetcode.com/problems/can-place-flowers/submissions/1154168944/
        Runtime 61 ms Beats 45.29%; Memory 51.16 MB Beats 5.49%; 
    https://leetcode.com/problems/can-place-flowers/submissions/1154169638/
        Runtime 48 ms Beats 94.85%; Memory 52.06 MB Beats 5.49%; 

 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;

    while(n !== 0 && i < flowerbed.length){
        let l = (flowerbed[i - 1] || 0) === 0;
        let r = (flowerbed[i + 1] || 0) === 0;

        if(l && (flowerbed[i] === 0) && r){
            flowerbed[i] = 1;
            n--;
        }
        
        i++;
    }
    
    return n === 0;
};