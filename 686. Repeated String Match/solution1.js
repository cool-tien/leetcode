/**
    O(nm)
    95~123 ms   （27.59%~67.82%）
    43.6~44.0 MB (50.57%~54.02%)

    https://leetcode.com/submissions/detail/828293920/
        Runtime: 114 ms, faster than 37.93% of JavaScript online submissions for Repeated String Match.
        Memory Usage: 43.7 MB, less than 51.72% of JavaScript online submissions for Repeated String Match.
    https://leetcode.com/submissions/detail/828358208/
        Runtime: 123 ms, faster than 27.59% of JavaScript online submissions for Repeated String Match.
        Memory Usage: 43.6 MB, less than 54.02% of JavaScript online submissions for Repeated String Match.
    https://leetcode.com/submissions/detail/828360777/
        Runtime: 95 ms, faster than 67.82% of JavaScript online submissions for Repeated String Match.
        Memory Usage: 44 MB, less than 50.57% of JavaScript online submissions for Repeated String Match.

 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 var repeatedStringMatch = function(a, b) {
    let end = a.length + b.length + a.length;
    let repeat = 1;
    let s = a;
    
    while(s.length <= end){
        if(s.includes(b))
            return repeat;
        
        repeat++;
        s += a;
    }
    
    return -1;
};