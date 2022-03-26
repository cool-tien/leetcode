/**
https://leetcode.com/submissions/detail/633420663/
Runtime: 76 ms, faster than 97.47% of JavaScript online submissions for Two Out of Three.
Memory Usage: 45.3 MB, less than 13.13% of JavaScript online submissions for Two Out of Three.

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    //  filter repeat values
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];
    nums3 = [...new Set(nums3)];
    let res = new Set();
    
    for(let num of nums1)
        if(nums2.includes(num) || nums3.includes(num))
            res.add(num);
    for(let num of nums2)
        if(nums1.includes(num) || nums3.includes(num))
            res.add(num);
    for(let num of nums3)
        if(nums1.includes(num) || nums2.includes(num))
            res.add(num);
    return [...res];
};