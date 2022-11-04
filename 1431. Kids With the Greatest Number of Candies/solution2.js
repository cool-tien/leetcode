/**
    O(2n)
    73~92 ms     (70.79%~86.35%)
    41.9~42.3 MB (61.74%~93.49%)
    
    https://leetcode.com/submissions/detail/836449004/
        Runtime: 81 ms, faster than 79.77% of JavaScript online submissions for Kids With the Greatest Number of Candies.
        Memory Usage: 42.3 MB, less than 61.74% of JavaScript online submissions for Kids With the Greatest Number of Candies.
    https://leetcode.com/submissions/detail/836449573/
        Runtime: 73 ms, faster than 86.35% of JavaScript online submissions for Kids With the Greatest Number of Candies.
        Memory Usage: 42.1 MB, less than 81.75% of JavaScript online submissions for Kids With the Greatest Number of Candies.
    https://leetcode.com/submissions/detail/836449669/
        Runtime: 92 ms, faster than 70.79% of JavaScript online submissions for Kids With the Greatest Number of Candies.
        Memory Usage: 41.9 MB, less than 93.49% of JavaScript online submissions for Kids With the Greatest Number of Candies.

 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 const kidsWithCandies = (candies, extra, max=Math.max(...candies)) => candies.map(x => (x + extra) >= max);