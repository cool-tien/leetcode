/**
    https://leetcode.com/submissions/detail/700510839/
    Runtime: 86 ms, faster than 23.09% of JavaScript online submissions for Calculate Digit Sum of a String.
    Memory Usage: 42.2 MB, less than 81.19% of JavaScript online submissions for Calculate Digit Sum of a String.

 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var digitSum = function(s, k) {
    while(s.length > k){
        let arr = [];
        
        for(let i=0; i<s.length; i+=k)
            arr.push(s.slice(i, i+k));
        
        arr = arr.map(str => str.split("").map(c => ~~c).reduce((a,b) => a+b));
        s = arr.join("");
    }
    
    return s;
};