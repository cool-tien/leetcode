/**
    O(n)
    80~89 ms
    41.7~42.2 MB

 * @param {number[]} nums
 * @return {number}
 */
 const minimumOperations = nums => [...new Set(nums)].filter(x => x!=0).length;