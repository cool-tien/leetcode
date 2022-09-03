/**
    O(n)
    82~89 ms (60.59%~70.37%)
    43.0~43.3 MB (18.81%~27.56%)
    
    https://leetcode.com/submissions/detail/790053596/
        Runtime: 89 ms, faster than 60.59% of JavaScript online submissions for Baseball Game.
        Memory Usage: 43.3 MB, less than 18.81% of JavaScript online submissions for Baseball Game.
    https://leetcode.com/submissions/detail/790056886/
        Runtime: 82 ms, faster than 70.37% of JavaScript online submissions for Baseball Game.
        Memory Usage: 43 MB, less than 27.56% of JavaScript online submissions for Baseball Game.
    https://leetcode.com/submissions/detail/790057157/
        Runtime: 85 ms, faster than 66.67% of JavaScript online submissions for Baseball Game.
        Memory Usage: 43.1 MB, less than 24.74% of JavaScript online submissions for Baseball Game.

 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    let res = [];
    
    for(let op of ops)
        if(op === 'C')
            res.pop();
        else if(op === 'D')
            res.push(res[res.length-1] * 2);
        else if(op === '+')
            res.push(res[res.length-1] + res[res.length-2]);
        else
            res.push(~~op);
    return res.reduce((a,b) => a+b, 0);
};