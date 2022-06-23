/**
    https://leetcode.com/submissions/detail/729197119/
    Runtime: 132 ms, faster than 81.09% of JavaScript online submissions for Find the Difference of Two Arrays.
    Memory Usage: 48.5 MB, less than 67.91% of JavaScript online submissions for Find the Difference of Two Arrays.

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
 var findDifference = function(nums1, nums2) {
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];
    
    for(let i=0; i<nums1.length; i++){
        let idx = nums2.indexOf(nums1[i]);
        
        if(idx != -1){
            nums1.splice(i, 1);
            nums2.splice(idx, 1);
            
            i--;
        }
    }
    
    return [nums1, nums2];
};