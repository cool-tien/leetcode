/**
    Time Complexity: O()
        88 ~ 108 ms     (58.61% ~ 75.60%)
    Space Complexity: O()
        61.0 ~ 61.3 MB  (24.64% ~ 27.30%)
    
    https://leetcode.com/problems/minimum-common-value/submissions/889753434/
        Runtime 108 ms, Beats 58.61%; Memory 61.3 MB, Beats 24.64%
    https://leetcode.com/problems/minimum-common-value/submissions/889753596/
        Runtime 88 ms, Beats 75.60%; Memory 61.0 MB, Beats 27.30%
    https://leetcode.com/problems/minimum-common-value/submissions/889753643/
        Runtime 95 ms, Beats 70.33%; Memory 61.2 MB, Beats 26.32%

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    //  swap, if num2 lenght longer than nums1
    if(nums2.length > nums1.length)
        [nums2, nums1] = [nums1, nums2];

    let min = Number.MAX_SAFE_INTEGER;
    let set = new Set(nums1);

    for(let num of nums2)
        if(set.has(num))
            min = Math.min(min, num);
    return (min === Number.MAX_SAFE_INTEGER)? -1: min;
};