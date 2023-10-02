/**
    Time Complexity: O(n)
        53 ~ 64 ms      (?%)
    Space Complexity: O(1)
        43.6 ~ 43.8 MB  (?%)
    
    https://leetcode.com/problems/minimum-operations-to-collect-elements/submissions/1064584798/
        Runtime 53 ms, Beats ?%; Memory 43.8 MB, Beats ?%; 
    https://leetcode.com/problems/minimum-operations-to-collect-elements/submissions/1064594780/
        Runtime 64 ms, Beats ?%; Memory 43.6 MB, Beats ?%; 
    https://leetcode.com/problems/minimum-operations-to-collect-elements/submissions/1064595412/
        Runtime 59 ms, Beats ?%; Memory 43.7 MB, Beats ?%; 

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let set = new Set();
    let collection = 0;
    
    for(let i=nums.length - 1; i>=0; i--){
        if(nums[i] <= k && !set.has(nums[i]))
            collection++;

        set.add(nums[i]);
        
        if(collection === k)
            return nums.length - i;
    }
};