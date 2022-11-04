/**
    O(n log n)
    100~136 ms   (14.86%~72.45%)
    43.5~43.8 MB (73.06%~91.33%)
    
    https://leetcode.com/submissions/detail/836439415/
        Runtime: 100 ms, faster than 72.45% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
        Memory Usage: 43.8 MB, less than 73.06% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
    https://leetcode.com/submissions/detail/836446054/
        Runtime: 117 ms, faster than 43.96% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
        Memory Usage: 43.8 MB, less than 79.26% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
    https://leetcode.com/submissions/detail/836446140/
        Runtime: 136 ms, faster than 14.86% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
        Memory Usage: 43.5 MB, less than 91.33% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.

 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
    let output = [];
    
    for(let i=0; i<prices.length; i++){
        let price = prices[i];
        let discount = 0;
        
        for(let j=i+1; j<prices.length; j++)
            if(price >= prices[j]){
                discount = prices[j];
                break;
            }
        
        output.push(price - discount);
    }
    
    return output;
};