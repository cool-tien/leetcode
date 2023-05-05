/**
    Time Complexity: O(n log(n))
        119 ~ 136 ms    (8.60% ~ 36.20%)
    Space Complexity: O(n)
        48.7 ~ 49.1 MB  (5.38%)

    https://leetcode.com/problems/maximum-product-of-three-numbers/submissions/944690640/
        Runtime 119 ms, Beats 36.20%; Memory 49.1 MB, Beats 5.38%; 
    https://leetcode.com/problems/maximum-product-of-three-numbers/submissions/944693504/
        Runtime 136 ms, Beats 8.60%; Memory 48.7 MB, Beats 5.38%; 
    https://leetcode.com/problems/maximum-product-of-three-numbers/submissions/944694382/
        Runtime 125 ms, Beats 20.79%; Memory 48.9 MB, Beats 5.38%; 

 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    const product = ({
        positive = [], negative = [], 
        positive_nums = 3, negative_nums = 0, 
    }) => {
        const product_nums = positive_nums + negative_nums;
        //  if all negative should fetch from last (smaller number)
        const arr = (positive_nums)?
            [...positive.slice(positive.length - positive_nums), ...negative.slice(0, negative_nums)]:
            [...negative.slice(negative.length - negative_nums)];
        const result = (arr.length >= product_nums)? 
            arr.reduce((acc, cur) => acc * cur, 1): Number.MIN_SAFE_INTEGER;
        
        return result;
    }

    //  split to negative and positive
    let positive = [];
    let negative = [];
    //  n = Product of Numbers
    let n = 3;
    let max_product = Number.MIN_SAFE_INTEGER;
    
    for(let num of nums)
        (num >= 0)? positive.push(num): negative.push(num);
    positive.sort((a, b) => a - b);
    negative.sort((a, b) => a - b);
    
    for(let i=n; i>=0; i--){
        let num = product({
            positive, negative, 
            positive_nums: i,
            negative_nums: n - i,
        });
        max_product = Math.max(max_product, num);
    }

    return max_product;
};