/**
    O(n)
    109~152 ms   (5.56%~22.22%)
    43.5~43.8 MB (5.56%)

    https://leetcode.com/submissions/detail/820543401/
        Runtime: 126 ms, faster than 5.56% of JavaScript online submissions for Minimum Bit Flips to Convert Number.
        Memory Usage: 43.5 MB, less than 5.56% of JavaScript online submissions for Minimum Bit Flips to Convert Number.
    https://leetcode.com/submissions/detail/820545011/
        Runtime: 152 ms, faster than 5.56% of JavaScript online submissions for Minimum Bit Flips to Convert Number.
        Memory Usage: 43.8 MB, less than 5.56% of JavaScript online submissions for Minimum Bit Flips to Convert Number.
    https://leetcode.com/submissions/detail/820545152/
        Runtime: 109 ms, faster than 22.22% of JavaScript online submissions for Minimum Bit Flips to Convert Number.
        Memory Usage: 43.8 MB, less than 5.56% of JavaScript online submissions for Minimum Bit Flips to Convert Number.

 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
 var minBitFlips = function(start, goal) {
    let flips = 0;
    start = start.toString(2);
    goal = goal.toString(2);
    let max_len = Math.max(start.length, goal.length);
    start = start.padStart(max_len, "0");
    goal = goal.padStart(max_len, "0");
    
    for(let i in start)
        if(start[i] != goal[i])
            flips++;
    return flips;
};