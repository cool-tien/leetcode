/**
    O(n)
    78~119 ms (13.88%~75.50%)
    42.4~42.6 MB (46.09%~60.18%)

    https://leetcode.com/submissions/detail/792654676/
        Runtime: 105 ms, faster than 30.61% of JavaScript online submissions for Jewels and Stones.
        Memory Usage: 42.6 MB, less than 46.09% of JavaScript online submissions for Jewels and Stones.
    https://leetcode.com/submissions/detail/792656044/
        Runtime: 78 ms, faster than 75.50% of JavaScript online submissions for Jewels and Stones.
        Memory Usage: 42.6 MB, less than 46.09% of JavaScript online submissions for Jewels and Stones.
    https://leetcode.com/submissions/detail/792656212/
        Runtime: 119 ms, faster than 13.88% of JavaScript online submissions for Jewels and Stones.
        Memory Usage: 42.4 MB, less than 60.18% of JavaScript online submissions for Jewels and Stones.

 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let set = new Set(jewels);
    
    return stones.split("").filter(c => set.has(c)).length;
};