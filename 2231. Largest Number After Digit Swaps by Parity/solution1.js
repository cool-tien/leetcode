/**
    O(3n log n)
    91~101 ms    (46.67%~63.33%)
    43.8~44.3 MB ( 6.67%~20.00%)
    
    https://leetcode.com/submissions/detail/822188899/
        Runtime: 91 ms, faster than 63.33% of JavaScript online submissions for Largest Number After Digit Swaps by Parity.
        Memory Usage: 43.8 MB, less than 20.00% of JavaScript online submissions for Largest Number After Digit Swaps by Parity.
    https://leetcode.com/submissions/detail/822191936/
        Runtime: 92 ms, faster than 62.22% of JavaScript online submissions for Largest Number After Digit Swaps by Parity.
        Memory Usage: 43.8 MB, less than 20.00% of JavaScript online submissions for Largest Number After Digit Swaps by Parity.
    https://leetcode.com/submissions/detail/822192028/
        Runtime: 101 ms, faster than 46.67% of JavaScript online submissions for Largest Number After Digit Swaps by Parity.
        Memory Usage: 44.3 MB, less than 6.67% of JavaScript online submissions for Largest Number After Digit Swaps by Parity.

 * @param {number} num
 * @return {number}
 */
 var largestInteger = function(num) {
    let nums = String(num).split("").map(x => ~~x);
    let is_odd = [];
    let even = [];
    let odd = [];
    let res = [];
    
    //  mark the odd even index
    for(let num of nums){
        let flag = (num % 2 === 1);
        
        is_odd.push(flag);
        flag? odd.push(num): even.push(num);
    }
    
    //  sorting
    odd.sort((a, b) => b - a);
    even.sort((a, b) => b - a);
    
    //  re-build to new largest number
    for(let flag of is_odd)
        res.push(flag? odd.shift(): even.shift());
    
    return Number(res.join(""));
};