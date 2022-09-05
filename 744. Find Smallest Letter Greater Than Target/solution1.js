/**
    O(n)
    89~116 ms (19.09%~62.42%)
    44.0~44.5 MB (9.72%~31.38%)
    
    https://leetcode.com/submissions/detail/791741924/
        Runtime: 116 ms, faster than 19.09% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
        Memory Usage: 44.4 MB, less than 11.83% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
    https://leetcode.com/submissions/detail/791756435/
        Runtime: 89 ms, faster than 62.41% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
        Memory Usage: 44 MB, less than 31.38% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
    https://leetcode.com/submissions/detail/791770461/
        Runtime: 99 ms, faster than 45.90% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
        Memory Usage: 44.5 MB, less than 9.72% of JavaScript online submissions for Find Smallest Letter Greater Than Target.

 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    let last = letters.length - 1;
    
    if(target >= letters[last])
        return letters[0];
    
    for(let c of letters)
        if(c > target)
            return c;
};