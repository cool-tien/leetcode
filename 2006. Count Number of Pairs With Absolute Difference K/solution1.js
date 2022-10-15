/**
    O(n² log n)
    80~101 ms    (63.45%~86.55%)
    42.1~42.9 MB (45.73%~87.03%)
    
    https://leetcode.com/submissions/detail/819004435/
        Runtime: 80 ms, faster than 86.55% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.
        Memory Usage: 42.3 MB, less than 81.01% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.
    https://leetcode.com/submissions/detail/819006144/
        Runtime: 101 ms, faster than 63.45% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.
        Memory Usage: 42.9 MB, less than 45.73% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.
    https://leetcode.com/submissions/detail/819006275/
        Runtime: 100 ms, faster than 65.19% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.
        Memory Usage: 42.1 MB, less than 87.03% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countKDifference = function(nums, k) {
    let count = 0;
    
    for(let i=0; i<nums.length; i++)
        for(let j=i+1; j<nums.length; j++)
            if( Math.abs(nums[i] - nums[j]) === k )
                count++;
    return count;
};