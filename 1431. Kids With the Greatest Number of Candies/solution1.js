/**
    O(2n)
    89~108 ms    (36.63%~74.61%)
    42.2~42.6 MB (40.95%~81.75%)

    https://leetcode.com/submissions/detail/836434593/
        Runtime: 91 ms, faster than 72.70% of JavaScript online submissions for Kids With the Greatest Number of Candies.
        Memory Usage: 42.2 MB, less than 81.75% of JavaScript online submissions for Kids With the Greatest Number of Candies.
    https://leetcode.com/submissions/detail/836448014/
        Runtime: 108 ms, faster than 36.63% of JavaScript online submissions for Kids With the Greatest Number of Candies.
        Memory Usage: 42.6 MB, less than 40.95% of JavaScript online submissions for Kids With the Greatest Number of Candies.
    https://leetcode.com/submissions/detail/836448095/
        Runtime: 89 ms, faster than 74.61% of JavaScript online submissions for Kids With the Greatest Number of Candies.
        Memory Usage: 42.3 MB, less than 73.06% of JavaScript online submissions for Kids With the Greatest Number of Candies.

 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    return candies.map(x => (x + extraCandies) >= max);
};