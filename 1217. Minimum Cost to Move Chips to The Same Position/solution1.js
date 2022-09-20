/**
    refer official solution: https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solution/

    O(n)
    85~119 ms    ( 6.45%~70.97%)
    41.4~42.3 MB (29.84%~98.39%)

    https://leetcode.com/submissions/detail/804135282/#/
        Runtime: 96 ms, faster than 50.00% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
        Memory Usage: 42.3 MB, less than 29.84% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
    https://leetcode.com/submissions/detail/804136824/#/
        Runtime: 85 ms, faster than 70.97% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
        Memory Usage: 41.4 MB, less than 98.39% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
    https://leetcode.com/submissions/detail/804137016/#/
        Runtime: 119 ms, faster than 6.45% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
        Memory Usage: 41.8 MB, less than 68.55% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.

 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
    let even = 0;
    let odd = 0;
    
    for(let i=0; i<position.length; i++)
        (position[i]%2 === 0)? even++: odd++;
    return position.length - Math.max(even, odd);
};