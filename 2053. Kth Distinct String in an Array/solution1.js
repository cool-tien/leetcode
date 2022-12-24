/**
    O(2n)
    78 ~ 89 ms      (86.49% ~ 92.34%)
    46.6 ~ 47.4 MB  (22.70% ~ 35.58%)

    https://leetcode.com/problems/kth-distinct-string-in-an-array/submissions/859425898/
        Runtime 78 ms, Beats 92.34%; Memory 47.4 MB, Beats 22.70%
    https://leetcode.com/problems/kth-distinct-string-in-an-array/submissions/859426625/
        Runtime 86 ms, Beats 87.84%; Memory 46.6 MB, Beats 35.58%
    https://leetcode.com/problems/kth-distinct-string-in-an-array/submissions/859426795/
        Runtime 89 ms, Beats 86.49%; Memory 47.2 MB, Beats 23.42%

 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = new Map();
    
    for(let str of arr)
        map.set(str, (map.get(str) || 0) + 1);
    
    // find distincts (just appear once)
    let distincts = [];
    [...map].map(arr => {
        if(arr[1] === 1) 
            distincts.push(arr[0]);
    });

    return distincts.length? 
        distincts[k-1] || "": 
        "";
};