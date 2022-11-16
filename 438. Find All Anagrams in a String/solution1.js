/**
    O(n)
    252 ~ 424 ms    (21.68% ~ 37.31%)
    50.0 ~ 50.8 MB  (14.06% ~ 25.10%)

    https://leetcode.com/submissions/detail/844372135/
        Runtime: 252 ms, faster than 37.31% of JavaScript online submissions for Find All Anagrams in a String.
        Memory Usage: 50 MB, less than 25.10% of JavaScript online submissions for Find All Anagrams in a String.
    https://leetcode.com/submissions/detail/844379170/
        Runtime: 424 ms, faster than 21.68% of JavaScript online submissions for Find All Anagrams in a String.
        Memory Usage: 50.6 MB, less than 15.28% of JavaScript online submissions for Find All Anagrams in a String.
    https://leetcode.com/submissions/detail/844380036/
        Runtime: 271 ms, faster than 34.34% of JavaScript online submissions for Find All Anagrams in a String.
        Memory Usage: 50.8 MB, less than 14.06% of JavaScript online submissions for Find All Anagrams in a String.

 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    //  str → map
    const buildMap = (str) => {
        let map = new Map();
        
        for(let c of str)
            map.set(c, (map.get(c) || 0) + 1);
        return map;
    }
    
    //  check is it anagram
    const isAnagram = (map1, map2) => {
        for(let [c, appear] of [...map1])
            if(!map2.has(c) || appear !== map2.get(c))
                return false;
        return true;
    }
    
    let s_map = buildMap(s.substring(0, p.length));
    let p_map = buildMap(p);
    let left = 0;
    let right = p.length;
    let output = (isAnagram(s_map, p_map))? [0]: [];
    
    while(right < s.length){
        if(s[left] !== s[right]){
            (s_map.get(s[left]) === 1)?
                s_map.delete(s[left]): 
                s_map.set(s[left], s_map.get(s[left]) - 1);
            s_map.set(s[right], (s_map.get(s[right]) || 0) + 1);
        }
        
        if(isAnagram(s_map, p_map))
            output.push(left+1);
    
        left++;
        right++;
    }
    
    return output;
};