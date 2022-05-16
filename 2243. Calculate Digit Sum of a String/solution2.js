/**
    https://leetcode.com/submissions/detail/700514043/
    Runtime: 71 ms, faster than 53.81% of JavaScript online submissions for Calculate Digit Sum of a String.
    Memory Usage: 42.5 MB, less than 51.43% of JavaScript online submissions for Calculate Digit Sum of a String.

 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var digitSum = function(s, k) {
    while(s.length > k){
        let arr = [];
        
        for(let i=0; i<s.length; i+=k)
            arr.push(s.slice(i, i+k).split("").map(c => ~~c).reduce((a,b) => a+b));
        s = arr.join("");
    }
    
    return s;
};