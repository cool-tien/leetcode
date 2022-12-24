/**
    O(n)
    76 ~ 94 ms      (51.19% ~ 76.79%)
    42.0 ~ 42.5 MB  (44.50% ~ 79.76%)

    https://leetcode.com/problems/goat-latin/submissions/858911271/
        Runtime 94 ms, Beats 51.19%; Memory 42.0 MB, Beats 79.76%
    https://leetcode.com/problems/goat-latin/submissions/858912924/
        Runtime 90 ms, Beats 60.12%; Memory 42.1 MB, Beats 66.67%
    https://leetcode.com/problems/goat-latin/submissions/858913108/
        Runtime 76 ms, Beats 76.79%; Memory 42.5 MB, Beats 44.50%

 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let words = sentence.split(" ");
    let vowel = ['a', 'e', 'i', 'o', 'u'];

    return words.map((word, i) => {
        let str_append = `ma${"a".repeat(i+1)}`;
        
        return vowel.includes(word[0].toLowerCase())?
            word + str_append:
            word.substring(1) + word[0] + str_append;
    }).join(" ");
};