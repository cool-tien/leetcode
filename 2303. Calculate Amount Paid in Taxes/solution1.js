/**
    O(n)
    88~139 ms    ( 5.26%~76.67%)
    44.0~44.5 MB (41.11%~80.00%)

    https://leetcode.com/submissions/detail/824105882/
        Runtime: 88 ms, faster than 76.67% of JavaScript online submissions for Calculate Amount Paid in Taxes.
        Memory Usage: 44.5 MB, less than 41.11% of JavaScript online submissions for Calculate Amount Paid in Taxes.
    https://leetcode.com/submissions/detail/824107003/
        Runtime: 102 ms, faster than 65.56% of JavaScript online submissions for Calculate Amount Paid in Taxes.
        Memory Usage: 44.5 MB, less than 41.11% of JavaScript online submissions for Calculate Amount Paid in Taxes.
    https://leetcode.com/submissions/detail/824107149/
        Runtime: 139 ms, faster than 5.56% of JavaScript online submissions for Calculate Amount Paid in Taxes.
        Memory Usage: 44 MB, less than 80.00% of JavaScript online submissions for Calculate Amount Paid in Taxes.

 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
 var calculateTax = function(brackets, income) {
    let taxes = 0;
    let prev = 0;
    
    for(let [earn, percent] of brackets){
        //  store for previous earn
        let _earn = earn;
        earn -= prev;
        earn = Math.min(income, earn);
        
        taxes += (earn * (percent / 100));
        income -= earn;
        prev = _earn;
        
        if(income <= 0)
            break;
    }
    
    return taxes;
};