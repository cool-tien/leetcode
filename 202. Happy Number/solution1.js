/**
    O(1)
    70~116 ms    (37.68%~93.18%)
    43.5~44.9 MB (12.24%~62.47%)

    https://leetcode.com/submissions/detail/840441517/
        Runtime: 95 ms, faster than 75.99% of JavaScript online submissions for Happy Number.
        Memory Usage: 44.9 MB, less than 12.24% of JavaScript online submissions for Happy Number.
    https://leetcode.com/submissions/detail/840442000/
        Runtime: 116 ms, faster than 37.68% of JavaScript online submissions for Happy Number.
        Memory Usage: 44.7 MB, less than 15.91% of JavaScript online submissions for Happy Number.
    https://leetcode.com/submissions/detail/840442167/
        Runtime: 70 ms, faster than 93.18% of JavaScript online submissions for Happy Number.
        Memory Usage: 43.5 MB, less than 62.47% of JavaScript online submissions for Happy Number.

 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let set = new Set();
    
    while(!set.has(n)){
        set.add(n);
        
        let sum = 0;
        
        for(let c of String(n))
            sum += (+c) ** 2;
        n = sum;
    }
    
    return n === 1;
};