/**
    Time Complexity: O(n + m)
        148 ~ 179 ms     5.04%
    Space Complexity: O(n + m)
        46.31 ~ 46.44 MB (46.46% ~ 50.93%)

    https://leetcode.com/problems/find-common-elements-between-two-arrays/submissions/1130304168/
        Runtime 158 ms Beats 5.04%; Memory 46.44 MB Beats 46.46%; 
    https://leetcode.com/problems/find-common-elements-between-two-arrays/submissions/1130307672/
        Runtime 148 ms Beats 5.04%; Memory 46.31 MB Beats 50.93%; 
    https://leetcode.com/problems/find-common-elements-between-two-arrays/submissions/1130308768/
        Runtime 179 ms Beats 5.04%; Memory 46.43 MB Beats 46.46%; 
    
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    let res = [0, 0];
    
    for(const num of nums1)
        if(set2.has(num))
            res[0]++;
    for(const num of nums2)
        if(set1.has(num))
            res[1]++;
    return res;
};