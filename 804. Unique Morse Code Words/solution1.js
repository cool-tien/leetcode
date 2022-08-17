/**
    O(n)
    80~99 ms
    43.5~43.8 MB

 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    return new Set(words.map(s => s.split("").map(c => morse[c.charCodeAt()-97]).join(""))).size;
};