/**
    https://leetcode.com/submissions/detail/688416313/
    Runtime: 87 ms, faster than 57.56% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
    Memory Usage: 44.9 MB, less than 8.40% of JavaScript online submissions for Remove Duplicates from Sorted Array II.

 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let obj = {};
    
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]==null)
            obj[nums[i]] = 1;
        else if(obj[nums[i]]<2)
            obj[nums[i]] += 1;
        //  appear more than twice
        else
            nums.splice(i--, 1);
    }
    
    return Object.values(obj).reduce((a, b)=>a + b);
};