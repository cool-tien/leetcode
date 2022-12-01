/**
    O(n)
    72 ~ 95 ms      (73.44% ~ 89.06%)
    43.5 ~ 44.1 MB  (26.95% ~ 41.80%)

    https://leetcode.com/submissions/detail/852609936/
        Runtime: 95 ms, faster than 73.44% of JavaScript online submissions for Determine if String Halves Are Alike.
        Memory Usage: 43.5 MB, less than 41.80% of JavaScript online submissions for Determine if String Halves Are Alike.
    https://leetcode.com/submissions/detail/852610505/
        Runtime: 72 ms, faster than 89.06% of JavaScript online submissions for Determine if String Halves Are Alike.
        Memory Usage: 44.1 MB, less than 26.95% of JavaScript online submissions for Determine if String Halves Are Alike.
    https://leetcode.com/submissions/detail/852610571/
        Runtime: 91 ms, faster than 77.73% of JavaScript online submissions for Determine if String Halves Are Alike.
        Memory Usage: 44.1 MB, less than 26.95% of JavaScript online submissions for Determine if String Halves Are Alike.
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    let mid = s.length / 2;
    let s1 = s.substring(0, mid).match(/[aeiou]/ig) || "";
    let s2 = s.substring(mid).match(/[aeiou]/ig) || "";
    
    return (s1.length === s2.length);
};