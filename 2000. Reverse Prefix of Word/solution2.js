/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch);
    return idx==-1?word:word.split("").slice(0, idx+1).reverse().join("")+word.substr(idx+1);
};