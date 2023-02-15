/**
    Time Complexity: O(n log n)
        129 ~ 136 ms    (63.33% ~ 81.76%)
    Space Complexity: O(1)
        51.2 ~ 51.4 MB  (61.72% ~ 71.34%)

    https://leetcode.com/problems/sort-the-students-by-their-kth-score/submissions/898177494/
        Runtime 133 ms, Beats 71.74%; Memory 51.2 MB, Beats 71.34%
    https://leetcode.com/problems/sort-the-students-by-their-kth-score/submissions/898178869/
        Runtime 129 ms, Beats 81.76%; Memory 51.4 MB, Beats 61.72%
    https://leetcode.com/problems/sort-the-students-by-their-kth-score/submissions/898179153/
        Runtime 136 ms, Beats 63.33%; Memory 51.3 MB, Beats 71.34%

 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
const sortTheStudents = (score, k) => score.sort((arr1, arr2) => arr2[k] - arr1[k]);