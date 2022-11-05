/**
    O(2n)
    137~139 ms   (55.37%~58.58%)
    48.5~49.2 MB (50.52%~60.23%)
    
    https://leetcode.com/submissions/detail/836433708/
        Runtime: 138 ms, faster than 56.61% of JavaScript online submissions for Reverse Vowels of a String.
        Memory Usage: 49.1 MB, less than 52.38% of JavaScript online submissions for Reverse Vowels of a String.
    https://leetcode.com/submissions/detail/836441358/
        Runtime: 139 ms, faster than 55.37% of JavaScript online submissions for Reverse Vowels of a String.
        Memory Usage: 49.2 MB, less than 50.52% of JavaScript online submissions for Reverse Vowels of a String.
    https://leetcode.com/submissions/detail/836441576/
        Runtime: 137 ms, faster than 58.58% of JavaScript online submissions for Reverse Vowels of a String.
        Memory Usage: 48.5 MB, less than 60.23% of JavaScript online submissions for Reverse Vowels of a String.

 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    let set_vowels = new Set("AEIOUaeiou");
    let arr_vowels = [];
    let output = [];
    
    for(let c of s)
        if(set_vowels.has(c))
            arr_vowels.push(c);
    
    for(let c of s)
        set_vowels.has(c)?
            output.push(arr_vowels.pop()):
            output.push(c);
    
    return output.join("");
};