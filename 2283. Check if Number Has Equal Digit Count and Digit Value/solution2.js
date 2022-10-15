/**
    O(2n)
    106~133 ms   (13.28%~47.72%)
    41.8~42.4 MB (52.28%~93.78%)

    https://leetcode.com/submissions/detail/822780834/
        Runtime: 106 ms, faster than 47.72% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.
        Memory Usage: 42.3 MB, less than 71.78% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.
    https://leetcode.com/submissions/detail/822781327/
        Runtime: 110 ms, faster than 40.25% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.
        Memory Usage: 41.8 MB, less than 93.78% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.
    https://leetcode.com/submissions/detail/822782836/
        Runtime: 133 ms, faster than 13.28% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.
        Memory Usage: 42.4 MB, less than 52.28% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.

 * @param {string} num
 * @return {boolean}
 */
 var digitCount = function(num) {
    let arr = new Array(10).fill(0);
    
    for(let i=0; i<num.length; i++){
        let idx = ~~num[i];
        arr[idx]++;
        
        if(arr[i] > idx)
            return false;
    }
    
    for(let i=0; i<num.length; i++)
        if(arr[i] !== ~~num[i])
            return false;
    return true;
};