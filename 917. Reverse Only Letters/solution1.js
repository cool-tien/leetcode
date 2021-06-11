/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let letter = (s.match(/[a-zA-Z]/g) || []).reverse();
    let index = 0;
    s = s.split("");
    
    for(let i=0; i<s.length; i++){
        let code = s[i].charCodeAt();
        
        if( (code>=65 && code<=90) || (code>=97 && code<=122) )
            s[i] = letter[index++];
    }
    
    return s.join("");
};