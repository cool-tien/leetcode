/**
    O(n)
    99~109 ms (51.81%~67.39%)
    45.1~45.5 MB (21.38%~31.88%)

    https://leetcode.com/submissions/detail/794421178/
        Runtime: 101 ms, faster than 66.30% of JavaScript online submissions for Check Distances Between Same Letters.
        Memory Usage: 45.5 MB, less than 24.28% of JavaScript online submissions for Check Distances Between Same Letters.
    https://leetcode.com/submissions/detail/794423385/
        Runtime: 99 ms, faster than 67.39% of JavaScript online submissions for Check Distances Between Same Letters.
        Memory Usage: 45.1 MB, less than 31.88% of JavaScript online submissions for Check Distances Between Same Letters.
    https://leetcode.com/submissions/detail/794423590/
        Runtime: 109 ms, faster than 51.81% of JavaScript online submissions for Check Distances Between Same Letters.
        Memory Usage: 45.5 MB, less than 21.38% of JavaScript online submissions for Check Distances Between Same Letters.

 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
 var checkDistances = function(s, distance) {
    let arr = new Array(26).fill().map((x, i) => [String.fromCharCode(i+97), distance[i]]);
    let map = new Map(arr);
    
    for(let i=0; i<s.length; i++){
        if(map.has(s[i]) || false){
            let next_idx = i + 1 + map.get(s[i]);
        
            if(s[i] !== s[next_idx])
                return false;
            
            map.delete(s[i]);
        }
    }
    
    return true;
};