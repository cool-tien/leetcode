/**
    O(2n)
    81 ~ 83 ms      (90.9% ~ 90.99%)
    46.5 ~ 46.9 MB  (32.88% ~ 35.58%)

    https://leetcode.com/problems/kth-distinct-string-in-an-array/submissions/859429008/
        Runtime 83 ms, Beats 90.9%; Memory 46.5 MB, Beats 35.58%
    https://leetcode.com/problems/kth-distinct-string-in-an-array/submissions/859429451/
        Runtime 83 ms, Beats 90.9%; Memory 46.7 MB, Beats 35.13%
    https://leetcode.com/problems/kth-distinct-string-in-an-array/submissions/859429656/
        Runtime 81 ms, Beats 90.99%; Memory 46.9 MB, Beats 32.88%

 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = new Map();
    
    for(let str of arr)
        map.set(str, (map.get(str) || 0) + 1);
    
    let idx = 0;
    for(let [str, appear] of [...map])
        if(appear === 1 && ++idx === k)
            return str;
    //  kth distinct out of range or not exits
    return "";
};