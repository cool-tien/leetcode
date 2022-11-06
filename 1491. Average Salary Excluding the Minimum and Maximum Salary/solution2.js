/**
    O(n)
    58~100 ms    (36.00%~97.76%)
    41.5~42.4 MB (7.68%~96.00%)

    https://leetcode.com/submissions/detail/837735818/
        Runtime: 100 ms, faster than 36.00% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
        Memory Usage: 42.4 MB, less than 7.68% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
    https://leetcode.com/submissions/detail/837743493/
        Runtime: 58 ms, faster than 97.76% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
        Memory Usage: 41.5 MB, less than 96.00% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
    https://leetcode.com/submissions/detail/837761070/
        Runtime: 68 ms, faster than 88.48% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
        Memory Usage: 41.5 MB, less than 92.24% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.

 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    let min = Infinity;
    let max = -1;
    let sum = 0
    
    for(let num of salary){
        min = Math.min(min, num);
        max = Math.max(max, num);
        sum += num;
    }
    
    sum = sum - min - max;
    return sum / (salary.length - 2);
};