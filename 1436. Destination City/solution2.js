/**
    O(2n)
    78~99 ms     (57.48%~84.09%)
    44.3~44.7 MB (28.27%~53.44%)

    https://leetcode.com/submissions/detail/810300614/
        Runtime: 99 ms, faster than 57.48% of JavaScript online submissions for Destination City.
        Memory Usage: 44.7 MB, less than 28.27% of JavaScript online submissions for Destination City.
    https://leetcode.com/submissions/detail/810302456/
        Runtime: 89 ms, faster than 71.73% of JavaScript online submissions for Destination City.
        Memory Usage: 44.3 MB, less than 53.44% of JavaScript online submissions for Destination City.
    https://leetcode.com/submissions/detail/810302750/
        Runtime: 98 ms, faster than 58.43% of JavaScript online submissions for Destination City.
        Memory Usage: 44.6 MB, less than 38.72% of JavaScript online submissions for Destination City.
    https://leetcode.com/submissions/detail/810302939/
        Runtime: 78 ms, faster than 84.09% of JavaScript online submissions for Destination City.
        Memory Usage: 44.4 MB, less than 42.76% of JavaScript online submissions for Destination City.

 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
    let hash = {};
    
    //  build hash map
    for(let arr of paths)
        hash[arr[0]] = arr[1];
    
    let start = paths[0][0];
    //  while until start not exist (found destination)
    while(hash[start])
        start = hash[start];
    
    return start;
};