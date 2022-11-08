/**
    solution from Official, refer:
    https://leetcode.com/problems/largest-perimeter-triangle/solution/    

    O(n log n )
    137~191 ms   (19.13%~74.54%)
    44.8~45.5 MB (46.60%~97.85%)

    https://leetcode.com/submissions/detail/839067917/
        Runtime: 137 ms, faster than 74.51% of JavaScript online submissions for Largest Perimeter Triangle.
        Memory Usage: 45.5 MB, less than 46.60% of JavaScript online submissions for Largest Perimeter Triangle.
    https://leetcode.com/submissions/detail/839078337/
        Runtime: 146 ms, faster than 72.14% of JavaScript online submissions for Largest Perimeter Triangle.
        Memory Usage: 45.5 MB, less than 46.60% of JavaScript online submissions for Largest Perimeter Triangle.
    https://leetcode.com/submissions/detail/839078467/
        Runtime: 191 ms, faster than 19.13% of JavaScript online submissions for Largest Perimeter Triangle.
        Memory Usage: 44.8 MB, less than 97.85% of JavaScript online submissions for Largest Perimeter Triangle.

 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    
    for(let i=nums.length-3; i>=0; i--)
        if(nums[i] + nums[i+1] > nums[i+2])
            return nums[i] + nums[i+1] + nums[i+2];
    return 0; 
};