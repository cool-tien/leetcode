/**
    O(n)
    62~97 ms (44.33%~97.05%)
    42.9~44.3 MB (6.53%~29.10%)

    https://leetcode.com/submissions/detail/792664027/
        Runtime: 90 ms, faster than 56.08% of JavaScript online submissions for Jewels and Stones.
        Memory Usage: 43.5 MB, less than 23.05% of JavaScript online submissions for Jewels and Stones.
    https://leetcode.com/submissions/detail/792667099/
        Runtime: 97 ms, faster than 44.33% of JavaScript online submissions for Jewels and Stones.
        Memory Usage: 44.3 MB, less than 6.53% of JavaScript online submissions for Jewels and Stones.
    https://leetcode.com/submissions/detail/792667655/
        Runtime: 62 ms, faster than 97.05% of JavaScript online submissions for Jewels and Stones.
        Memory Usage: 42.9 MB, less than 29.10% of JavaScript online submissions for Jewels and Stones.

 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let map = new Map();
    let count = 0;
    
    for(let c of stones)
        map.set(c, (map.get(c) + 1) || 1);
    for(let c of jewels)
        count += map.get(c) || 0;
    return count;
};