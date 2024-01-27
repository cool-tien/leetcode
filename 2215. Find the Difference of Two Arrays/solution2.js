/**
    Time Complexity: O(n + m)
        68 ~ 84 ms          (58.60% ~ 95.18%)
    Space Complexity: O(2n + 2m)
        56.71 ~ 56.80 MB    (5.53%)

    https://leetcode.com/problems/find-the-difference-of-two-arrays/submissions/1158222908/
        Runtime 84 ms Beats 58.60%; Memory 56.71 MB Beats 5.53%; 
    https://leetcode.com/problems/find-the-difference-of-two-arrays/submissions/1158242806/
        Runtime 68 ms Beats 95.18%; Memory 56.80 MB Beats 5.53%; 
    https://leetcode.com/problems/find-the-difference-of-two-arrays/submissions/1158245094/
        Runtime 83 ms Beats 60.44%; Memory 56.80 MB Beats 5.53%; 

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let ans1 = [];
    let ans2 = [];

    for(const num of [...set1])
        if(!set2.has(num))
            ans1.push(num);
    for(const num of [...set2])
        if(!set1.has(num))
            ans2.push(num);
    
    return [ans1, ans2];
};