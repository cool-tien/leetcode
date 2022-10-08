/**
    O(2n)
    119~168 ms   (11.48%~70.49%)
    45.8~46.6 MB ( 9.84%~27.87%)

    https://leetcode.com/submissions/detail/816151407/
        Runtime: 168 ms, faster than 11.48% of JavaScript online submissions for Redistribute Characters to Make All Strings Equal.
        Memory Usage: 46.5 MB, less than 9.84% of JavaScript online submissions for Redistribute Characters to Make All Strings Equal.
    https://leetcode.com/submissions/detail/816154057/
        Runtime: 121 ms, faster than 70.49% of JavaScript online submissions for Redistribute Characters to Make All Strings Equal.
        Memory Usage: 45.8 MB, less than 27.87% of JavaScript online submissions for Redistribute Characters to Make All Strings Equal.
    https://leetcode.com/submissions/detail/816154563/
        Runtime: 119 ms, faster than 70.49% of JavaScript online submissions for Redistribute Characters to Make All Strings Equal.
        Memory Usage: 46.6 MB, less than 9.84% of JavaScript online submissions for Redistribute Characters to Make All Strings Equal.

 * @param {string[]} words
 * @return {boolean}
 */
 var makeEqual = function(words) {
    let len = words.length;
    let s = words.join("");
    let map = new Map();
    
    for(let c of s)
        map.set(c, (map.get(c) || 0) + 1);
    
    //  re-build to frequency of array
    let freqs = [...map].map(arr => arr[1]);
    
    for(let freq of freqs)
        if(freq % len !== 0)
            return false;
    return true;
};