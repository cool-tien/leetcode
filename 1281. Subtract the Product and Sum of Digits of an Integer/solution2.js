/**
    O(n)
    94~96 ms     (51.06%~55.81%)
    41.6~42.3 MB (31.37%~93.84%)

    https://leetcode.com/submissions/detail/838388879/
        Runtime: 96 ms, faster than 51.06% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
        Memory Usage: 42.3 MB, less than 31.37% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
    https://leetcode.com/submissions/detail/838390639/
        Runtime: 94 ms, faster than 55.81% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
        Memory Usage: 42 MB, less than 72.95% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
    https://leetcode.com/submissions/detail/838390775/
        Runtime: 95 ms, faster than 53.19% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
        Memory Usage: 41.6 MB, less than 93.84% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.

 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    let arr = ("" + n).split("");
    let product = 1;
    let sum = 0;
    
    for(let c of arr){
        let num = ~~c;
        
        product *= num;
        sum += num;
    }
    
    return product - sum;
};