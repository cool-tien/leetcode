/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm";
    
    return words.filter(s => 
        (row1.length === new Set(s.toLowerCase() + row1).size) || 
        (row2.length === new Set(s.toLowerCase() + row2).size) ||
        (row3.length === new Set(s.toLowerCase() + row3).size)
    );
};