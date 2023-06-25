/**
    Time Complexity: O(n log n)
        146 ~ 162 ms    (23.55% ~ 79.50%)
    Space Complexity: O(1)
        55.2 ~ 56.4 MB  (65.71% ~ 99.51%)

    https://leetcode.com/problems/sort-by/submissions/979056408/
        Runtime 146 ms, Beats 79.50%; Memory 55.2 MB, Beats 99.51%; 
    https://leetcode.com/problems/sort-by/submissions/979058003/
        Runtime 152 ms, Beats 58.51%; Memory 56.3 MB, Beats 72.73%; 
    https://leetcode.com/problems/sort-by/submissions/979058110/
        Runtime 162 ms, Beats 23.55%; Memory 56.4 MB, Beats 65.71%; 
    
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = (arr, fn) => arr.sort((a, b) => fn(a) - fn(b));