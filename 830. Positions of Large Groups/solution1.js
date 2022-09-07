/**
    O(n)
    67~146 ms (9.92%~99.17%)
    46.2~46.8 MB (6.61%~10.74%)

    https://leetcode.com/submissions/detail/793531225/
        Runtime: 139 ms, faster than 16.53% of JavaScript online submissions for Positions of Large Groups.
        Memory Usage: 46.7 MB, less than 6.61% of JavaScript online submissions for Positions of Large Groups.
    https://leetcode.com/submissions/detail/793534207/
        Runtime: 67 ms, faster than 99.17% of JavaScript online submissions for Positions of Large Groups.
        Memory Usage: 46.2 MB, less than 10.74% of JavaScript online submissions for Positions of Large Groups.
    https://leetcode.com/submissions/detail/793540186/
        Runtime: 146 ms, faster than 9.92% of JavaScript online submissions for Positions of Large Groups.
        Memory Usage: 46.8 MB, less than 6.61% of JavaScript online submissions for Positions of Large Groups.

 * @param {string} s
 * @return {number[][]}
 */
 var largeGroupPositions = function(s) {
    let res = [];
    let i = 0;
    
    while(i < s.length){
        if(s[i]===s[i+1] && s[i+1]===s[i+2]){
            let cur = i + 3;
            
            while(s[cur] === s[i])
                cur++;
            
            res.push([i, cur-1]);
            i = cur - 1;
        }
        else
            i++;
    }
    
    return res;
};