/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.toUpperCase()==word) return true;
    else if(word.toLowerCase()==word) return true;
    
    let capital = word.substr(0,1).toUpperCase()+word.substr(1).toLowerCase();
    
    if(capital==word) return true;
    else return false;
};