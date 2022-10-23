/**
    O(n)
    74~119 ms    (10.44%~85.81%)
    42.3 MB      (39.97%~49.59%)

    https://leetcode.com/submissions/detail/826295799/
        Runtime: 90 ms, faster than 68.84% of JavaScript online submissions for Find Subarrays With Equal Sum.
        Memory Usage: 42.3 MB, less than 39.97% of JavaScript online submissions for Find Subarrays With Equal Sum.
    https://leetcode.com/submissions/detail/826296138/
        Runtime: 74 ms, faster than 85.81% of JavaScript online submissions for Find Subarrays With Equal Sum.
        Memory Usage: 42.3 MB, less than 39.97% of JavaScript online submissions for Find Subarrays With Equal Sum.
    https://leetcode.com/submissions/detail/826296266/
        Runtime: 119 ms, faster than 10.44% of JavaScript online submissions for Find Subarrays With Equal Sum.
        Memory Usage: 42.3 MB, less than 49.59% of JavaScript online submissions for Find Subarrays With Equal Sum.

 * @param {number[]} nums
 * @return {boolean}
 */
 var findSubarrays = function(nums) {
    let set = new Set();
    let end = nums.length - 1;
    
    for(let i=0; i<end; i++){
        let sum = nums[i] + nums[i+1];
        
        if(set.has(sum))
            return true;
        set.add(sum);
    }
    
    return false;
};