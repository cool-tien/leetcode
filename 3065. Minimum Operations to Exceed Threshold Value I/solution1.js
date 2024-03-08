/**
    Time Complexity: O(n) 
        59 ~ 73 ms          (10.55% ~ 69.60%)
    Space Complexity: O(1) 
        50.56 ~ 51.10 MB    (61.56% ~ 90.95%)
    
    [Time taken: 3m 2s]
    https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/submissions/1197262701/
        Runtime 73 ms Beats 10.55%; Memory 51.10 MB Beats 61.56%; 
    https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/submissions/1197289250/
        Runtime 59 ms Beats 69.60%; Memory 50.67 MB Beats 88.69%; 
    https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/submissions/1197289888/
        Runtime 61 ms Beats 60.30%; Memory 50.56 MB Beats 90.95%; 

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = (nums, k) => nums.filter(num => num < k).length;
