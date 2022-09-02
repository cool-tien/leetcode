/**
    O(n)
    71~93 ms (74.31%~96.84%)
    44.2~44.4 MB (41.30%~45.45%)

    https://leetcode.com/submissions/detail/789394534/
        Runtime: 87 ms, faster than 80.83% of JavaScript online submissions for Robot Return to Origin.
        Memory Usage: 44.4 MB, less than 41.30% of JavaScript online submissions for Robot Return to Origin.
    https://leetcode.com/submissions/detail/789397249/
        Runtime: 71 ms, faster than 96.84% of JavaScript online submissions for Robot Return to Origin.
        Memory Usage: 44.2 MB, less than 45.45% of JavaScript online submissions for Robot Return to Origin.
    https://leetcode.com/submissions/detail/789401162/
        Runtime: 93 ms, faster than 74.31% of JavaScript online submissions for Robot Return to Origin.
        Memory Usage: 44.3 MB, less than 45.45% of JavaScript online submissions for Robot Return to Origin.

 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    let step = {
        'R': 0,
        'L': 0,
        'U': 0,
        'D': 0,
    };
    
    for(let move of moves)
        step[move]++;
    
    return (step['R']===step['L'] && step['U']===step['D']);
};