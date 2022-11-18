/**
    O(1)
    82 ~ 111 ms     (10.06% ~ 72.76%)
    41.7 ~ 42.0 MB  (58.50% ~ 80.80%)

    https://leetcode.com/submissions/detail/845563807/
        Runtime: 82 ms, faster than 72.76% of JavaScript online submissions for Convert the Temperature.
        Memory Usage: 42 MB, less than 58.50% of JavaScript online submissions for Convert the Temperature.
    https://leetcode.com/submissions/detail/845567874/
        Runtime: 87 ms, faster than 64.53% of JavaScript online submissions for Convert the Temperature.
        Memory Usage: 41.9 MB, less than 70.20% of JavaScript online submissions for Convert the Temperature.
    https://leetcode.com/submissions/detail/845568001/
        Runtime: 111 ms, faster than 10.06% of JavaScript online submissions for Convert the Temperature.
        Memory Usage: 41.7 MB, less than 80.80% of JavaScript online submissions for Convert the Temperature.

 * @param {number} celsius
 * @return {number[]}
 */
 const convertTemperature = celsius => [celsius + 273.15, celsius * 1.8 + 32];