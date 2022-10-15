/**
    O(n)
    97~103 ms    (35.00%~46.67%)
    41.7~42.3 MB (55.83%~96.67%)
    
    https://leetcode.com/submissions/detail/819796399/
        Runtime: 99 ms, faster than 40.83% of JavaScript online submissions for Minimum Moves to Convert String.
        Memory Usage: 41.7 MB, less than 96.67% of JavaScript online submissions for Minimum Moves to Convert String.
    https://leetcode.com/submissions/detail/819798702/
        Runtime: 103 ms, faster than 35.00% of JavaScript online submissions for Minimum Moves to Convert String.
        Memory Usage: 41.9 MB, less than 91.67% of JavaScript online submissions for Minimum Moves to Convert String.
    https://leetcode.com/submissions/detail/819798826/
        Runtime: 97 ms, faster than 46.67% of JavaScript online submissions for Minimum Moves to Convert String.
        Memory Usage: 42.3 MB, less than 55.83% of JavaScript online submissions for Minimum Moves to Convert String.

 * @param {string} s
 * @return {number}
 */
 var minimumMoves = function(s) {
    let move = 0;
    
    for(let i=0; i<s.length; i++)
        if(s[i] === 'X'){
            i += 2;
            move++;
        }
    
    return move;
};