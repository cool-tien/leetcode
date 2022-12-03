/**
    O(2n)
    60 ~ 102 ms     (38.84% ~ 96.93%)
    43.1 ~ 43.7 MB  (23.85% ~ 30.70%)

    https://leetcode.com/submissions/detail/852034313/
        Runtime: 60 ms, faster than 96.93% of JavaScript online submissions for Unique Number of Occurrences.
        Memory Usage: 43.1 MB, less than 30.70% of JavaScript online submissions for Unique Number of Occurrences.
    https://leetcode.com/submissions/detail/852036398/
        Runtime: 102 ms, faster than 38.84% of JavaScript online submissions for Unique Number of Occurrences.
        Memory Usage: 43.2 MB, less than 29.28% of JavaScript online submissions for Unique Number of Occurrences.
    https://leetcode.com/submissions/detail/852036657/
        Runtime: 100 ms, faster than 44.27% of JavaScript online submissions for Unique Number of Occurrences.
        Memory Usage: 43.7 MB, less than 23.85% of JavaScript online submissions for Unique Number of Occurrences.

 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map();
    //  store number of occurrences
    let set = new Set();
    
    //  build map
    for(let num of arr)
        map.set(num, (map.get(num) || 0) + 1);
    //  check the appear time is it duplicate
    for(let [num, appear] of [...map])    
        if(set.has(appear))
            return false;
        else
            set.add(appear);
    return true;
};