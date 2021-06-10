/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.split(" ");
    let index = -1;
    
    for(let i=0; i<sentence.length; i++){
        let idx = sentence[i].indexOf(searchWord);
        
        if(idx!=-1 && idx==0){
            index = i+1;
            break;
        }
    }
    
    return index;
};