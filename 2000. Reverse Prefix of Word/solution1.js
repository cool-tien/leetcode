/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch);
    
    if(idx==-1)
        return word;
    else{
        word = word.split("");
        return word.slice(0, idx+1).reverse().concat(word.slice(idx+1)).join("");
    }
};