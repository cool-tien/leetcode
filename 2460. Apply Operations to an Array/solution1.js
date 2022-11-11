/**
    O(n)
    81~129 ms    (20.68%~86.69%)
    44.2~44.3 MB (24.65%~37.39%)

    https://leetcode.com/submissions/detail/841220516/
        Runtime: 129 ms, faster than 20.68% of JavaScript online submissions for Apply Operations to an Array.
        Memory Usage: 44.3 MB, less than 30.31% of JavaScript online submissions for Apply Operations to an Array.
    https://leetcode.com/submissions/detail/841222791/
        Runtime: 123 ms, faster than 35.98% of JavaScript online submissions for Apply Operations to an Array.
        Memory Usage: 44.3 MB, less than 24.65% of JavaScript online submissions for Apply Operations to an Array.
    https://leetcode.com/submissions/detail/841222906/
        Runtime: 81 ms, faster than 86.69% of JavaScript online submissions for Apply Operations to an Array.
        Memory Usage: 44.2 MB, less than 37.39% of JavaScript online submissions for Apply Operations to an Array.

 * @param {number[]} nums
 * @return {number[]}
 */
 var applyOperations = function(nums) {
    let len = nums.length - 1;
    let i = 0;
    
    while(i < len)
        //  first priority (aviod i & i+1 === 0)
        if(nums[i] === 0){
            nums.push(nums.splice(i, 1)[0]);
            len--;
        }
        else if(nums[i] === nums[i+1]){
            nums[i] += nums[i];
            nums.splice(i+1, 1);
            nums.push(0);
            i++;
            len--;
        }
        else
            i++;
    
    return nums;
};