/**
    refer: netizens solution

    O(2n log n)
    178~210 ms   (64.44%~80.42%)
    51.7~52.5 MB (83.59%~97.13%)

    https://leetcode.com/submissions/detail/831775997/
        Runtime: 178 ms, faster than 80.42% of JavaScript online submissions for Group Anagrams.
        Memory Usage: 51.7 MB, less than 97.13% of JavaScript online submissions for Group Anagrams.
    https://leetcode.com/submissions/detail/831778913/
        Runtime: 210 ms, faster than 64.44% of JavaScript online submissions for Group Anagrams.
        Memory Usage: 52 MB, less than 95.49% of JavaScript online submissions for Group Anagrams.
    https://leetcode.com/submissions/detail/831779009/
        Runtime: 197 ms, faster than 73.17% of JavaScript online submissions for Group Anagrams.
        Memory Usage: 52.5 MB, less than 83.59% of JavaScript online submissions for Group Anagrams.

 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let map = new Map();
    
    for(let s of strs){
        let key = s.split("").sort().join("");
        
        if(map.has(key))
            map.get(key).push(s);
        else
            map.set(key, [s]);
    }
    
    return [...map.values()];
};