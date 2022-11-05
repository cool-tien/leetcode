/**
    O(n)
    75~104 ms    (38.89%~86.42%)
    41.7~42.1 MB (51.23%~95.68%)

    https://leetcode.com/submissions/detail/837124090/
        Runtime: 104 ms, faster than 38.89% of JavaScript online submissions for Get Maximum in Generated Array.
        Memory Usage: 41.9 MB, less than 79.63% of JavaScript online submissions for Get Maximum in Generated Array.
    https://leetcode.com/submissions/detail/837134229/
        Runtime: 90 ms, faster than 70.99% of JavaScript online submissions for Get Maximum in Generated Array.
        Memory Usage: 42.1 MB, less than 51.23% of JavaScript online submissions for Get Maximum in Generated Array.
    https://leetcode.com/submissions/detail/837134324/
        Runtime: 75 ms, faster than 86.42% of JavaScript online submissions for Get Maximum in Generated Array.
        Memory Usage: 41.7 MB, less than 95.68% of JavaScript online submissions for Get Maximum in Generated Array.

 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
    if(n === 0) return 0;
    
    let nums = [0, 1];
    let max = 1;
    let i = 2;
    let is_even = true;
    let even_idx = 1;
    
    while(i <= n){
        let num = (is_even)? 
            nums[even_idx++]: 
            nums[even_idx] + nums[even_idx-1];
        
        nums.push(num);
        max = Math.max(max, num);
        is_even = !is_even;
        i++;
    }
    
    return max;
};