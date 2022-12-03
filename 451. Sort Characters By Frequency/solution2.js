/**
    O(n log n)
    88 ~ 137 ms     (57.79% ~ 93.43%)
    44.5 ~ 44.6 MB  (78.03% ~ 80.45%)

    https://leetcode.com/submissions/detail/853704919/
        Runtime: 137 ms, faster than 57.79% of JavaScript online submissions for Sort Characters By Frequency.
        Memory Usage: 44.5 MB, less than 78.03% of JavaScript online submissions for Sort Characters By Frequency.
    https://leetcode.com/submissions/detail/853712578/
        Runtime: 95 ms, faster than 89.45% of JavaScript online submissions for Sort Characters By Frequency.
        Memory Usage: 44.6 MB, less than 78.03% of JavaScript online submissions for Sort Characters By Frequency.
    https://leetcode.com/submissions/detail/853715034/
        Runtime: 88 ms, faster than 93.43% of JavaScript online submissions for Sort Characters By Frequency.
        Memory Usage: 44.5 MB, less than 80.45% of JavaScript online submissions for Sort Characters By Frequency.

 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let map = new Map();
    let output = "";
    
    for(let c of s)
        map.set(c, (map.get(c) || 0) + 1);
    
    let sorted = [...map].sort((a, b) => {
        if(a[1] === b[1])
            return (a[0] > b[0])? -1: 1;
        return b[1] - a[1];
    });
    
    for(let [c, appear] of [...sorted])
        output += (c).repeat(appear);
    return output;
};