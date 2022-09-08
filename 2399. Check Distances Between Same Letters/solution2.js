/**
    [some concept refer netizen] - after appear set distance = -1

    O(n)
    57~102 ms (64.49%~100%)
    42.3~42.5 MB (90.58%~94.57%)
    
    https://leetcode.com/submissions/detail/794428506/
        Runtime: 81 ms, faster than 83.70% of JavaScript online submissions for Check Distances Between Same Letters.
        Memory Usage: 42.3 MB, less than 94.57% of JavaScript online submissions for Check Distances Between Same Letters.
    https://leetcode.com/submissions/detail/794433751/
        Runtime: 102 ms, faster than 64.49% of JavaScript online submissions for Check Distances Between Same Letters.
        Memory Usage: 42.5 MB, less than 90.58% of JavaScript online submissions for Check Distances Between Same Letters.
    https://leetcode.com/submissions/detail/794433955/
        Runtime: 57 ms, faster than 100.00% of JavaScript online submissions for Check Distances Between Same Letters.
        Memory Usage: 42.5 MB, less than 92.03% of JavaScript online submissions for Check Distances Between Same Letters.

 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
 var checkDistances = function(s, distance) {
    for(let i=0; i<s.length; i++){
        let idx = s[i].charCodeAt() - 97;
        let next = distance[idx];
        
        if(next !== -1){
            if(s[i] !== s[i+1+next])
                return false;
            
            distance[idx] = -1;
        }
    }
    
    return true;
};