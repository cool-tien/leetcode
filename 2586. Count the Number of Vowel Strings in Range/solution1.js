/**
    Time Complexity: O(n)
        72 ~ 86 ms      (?% ~ ?%)
    Space Complexity: O(1)
        45.4 ~ 45.8 MB  (?% ~ ?%)
    
    https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/submissions/914110556/
        Runtime 86 ms, Beats ?%; Memory 45.8 MB, Beats ?%
    https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/submissions/914112176/
        Runtime 77 ms, Beats ?%; Memory 45.7 MB, Beats ?%
    https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/submissions/914112362/
        Runtime 72 ms, Beats ?%; Memory 45.4 MB, Beats ?%

 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];    
    let count = 0;
    
    //  slice the "words", from "left" to "right"
    words = words.slice(left, right + 1);
    for(let word of words){
        const is_vowel_string = vowels.includes(word[0]) && vowels.includes(word[word.length - 1]);
        
        if(is_vowel_string)
            count++;
    }

    return count;
};