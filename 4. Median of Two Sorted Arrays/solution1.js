/**
    Time Complexity: O((n+m) log(n+m))
        110 ~ 118 ms    (29.21% ~ 48.95%)
    Space Complexity: O(n+m)
        47.8 ~ 48.8 MB  (19.22% ~ 58.50%)
    
    https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/983569719/
        Runtime 110 ms, Beats 48.95%; Memory 48.8 MB, Beats 19.22%;
    https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/983574573/
        Runtime 118 ms, Beats 29.21%; Memory 47.8 MB, Beats 58.50%; 
    https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/983575138/
        Runtime 115 ms, Beats 34.88%; Memory 48.2 MB, Beats 43.66%;

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2).sort((a, b) => a - b);
    const mid = (nums1.length % 2)?
        ~~(nums1.length / 2): 
        nums1.length / 2;

    return (nums1.length % 2)?
        nums1[mid]:
        (nums1[mid - 1] + nums1[mid]) / 2;
};