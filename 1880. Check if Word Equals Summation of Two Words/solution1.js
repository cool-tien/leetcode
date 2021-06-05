/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let num1 = Number(firstWord.split("").map(x=>x.charCodeAt()-97).join(""));
    let num2 = Number(secondWord.split("").map(x=>x.charCodeAt()-97).join(""));
    let target = Number(targetWord.split("").map(x=>x.charCodeAt()-97).join(""));
    
    return num1+num2==target;
};